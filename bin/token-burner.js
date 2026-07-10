#!/usr/bin/env node
import fs from "node:fs";
import process from "node:process";
import { generatePrompt } from "../src/generator.js";

function parseArgs(argv) {
  const result = { mode: "medium", audit: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--mode") result.mode = argv[++i];
    else if (arg === "--prompt") result.prompt = argv[++i];
    else if (arg === "--seed") result.seed = Number.parseInt(argv[++i], 10);
    else if (arg === "--output") result.output = argv[++i];
    else if (arg === "--audit") result.audit = true;
    else if (arg === "--help" || arg === "-h") result.help = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return result;
}

function help() {
  console.log(`Ultra Max Token Burner

Usage:
  token-burner --mode <medium|max|ultra-max> --prompt "<task>"
  echo "<task>" | token-burner --mode max

Options:
  --mode      Expansion mode. Default: medium
  --prompt    Source prompt. If omitted, stdin is used.
  --seed      Integer seed for reproducible variation.
  --output    Write upgraded prompt to a file.
  --audit     Print the Burn Manifest to stderr.
  --help      Show this help.
`);
}

async function readStdin() {
  if (process.stdin.isTTY) return "";
  let input = "";
  for await (const chunk of process.stdin) input += chunk;
  return input.trim();
}

try {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    help();
    process.exit(0);
  }

  const prompt = args.prompt || (await readStdin());
  if (!prompt) {
    help();
    process.exit(1);
  }

  const result = generatePrompt({
    prompt,
    mode: args.mode,
    seed: Number.isInteger(args.seed) ? args.seed : undefined,
  });

  if (args.output) {
    fs.writeFileSync(args.output, result.output, "utf8");
    console.log(`Wrote ${args.output}`);
  } else {
    process.stdout.write(result.output);
  }

  if (args.audit) {
    const manifest = {
      mode: result.label,
      seed: result.seed,
      taskType: result.taskType,
      selectedModules: result.selectedModules,
      optionalModules: result.optionalModules,
      sourceWords: result.sourceWords,
      outputWords: result.outputWords,
      estimatedExpansionMultiplier: `${result.estimatedExpansionMultiplier}x`,
      networkCalls: 0,
      transparency: "No obfuscation, crawler evasion, policy bypass, or false usage reporting.",
    };
    process.stderr.write(`\n\n--- Burn Manifest ---\n${JSON.stringify(manifest, null, 2)}\n`);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
