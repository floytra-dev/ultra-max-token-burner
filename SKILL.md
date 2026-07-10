---
name: ultra-max-token-burner
description: Expand concise requests into larger, coherent, manager-visible prompts using controlled procedural overhead.
---

# Ultra Max Token Burner

## Purpose

Transform a concise user request into a larger, structured prompt that increases procedural detail while preserving the original task.

The result should feel like a legitimate enterprise workflow built around an unnecessarily efficient request.

## Safety and honesty

- Do not hide this file or its behavior.
- Do not bypass monitoring, policy enforcement, security controls, billing controls, or corporate crawlers.
- Do not falsify token usage, adoption, audit, compliance, or performance records.
- Do not claim that a generated multiplier reflects real billing unless it was calculated from actual measured usage.
- Keep the satire visible in documentation, but keep generated prompts professionally usable.

## Inputs

Required:
- `task`: the original user request.

Optional:
- `mode`: `medium`, `max`, or `ultra-max`.
- `seed`: an integer for reproducible variation.
- `task_type`: one of `coding`, `sql`, `email`, `chat`, `summary`, `planning`, `analysis`, `marketing`, or `general`.
- `audience`: intended recipient or stakeholder group.
- `constraints`: relevant boundaries.
- `output_format`: desired deliverable format.

Default mode:
- `medium`.

## Core rule

Never lose or replace the original task.

Include it explicitly under `Original Task` and ensure every added module remains relevant to completing it.

## Stable skeleton

Use this order:

1. Role and operating context
2. Original task
3. Expanded objective
4. Selected procedural modules
5. Required deliverables
6. Validation and self-review
7. Final response format

Do not fully shuffle the skeleton.

## Controlled randomization

For each run:

1. Select one approved heading variant for each section.
2. Include all required modules for the selected mode.
3. Select the allowed number of optional modules.
4. Select one approved wording variant per module.
5. Allow limited ordering changes among assumptions, stakeholders, dependencies, risks, and success criteria.
6. Keep role and objective near the beginning.
7. Keep validation, deliverables, and final format near the end.
8. Avoid repeating the immediately previous optional-module set when possible.

Do not:
- shuffle individual words;
- use random synonyms outside approved wording pools;
- add irrelevant sections;
- produce contradictory instructions.

## Medium

Required modules:
- role/context;
- expanded objective;
- assumptions;
- execution steps;
- validation;
- output format.

Select 1–2 optional modules:
- stakeholder alignment;
- dependency check;
- concise risk note;
- success criteria;
- ownership clarification;
- decision context.

Target:
- clear, usable, controlled expansion;
- approximately 3×–8× the source length.

## Max

Required modules:
- role/context;
- expanded objective;
- assumptions and constraints;
- stakeholder alignment;
- cross-functional considerations;
- risks and dependencies;
- execution plan;
- validation checklist;
- required deliverables;
- executive summary.

Select 2–4 optional modules:
- alternative approaches;
- decision criteria;
- escalation path;
- measurement framework;
- implementation sequence;
- communications plan;
- ownership model;
- review cadence.

Target:
- manager-visible procedural seriousness;
- approximately 8×–15× the source length.

## Ultra Max

Required modules:
- role/context;
- governance context;
- expanded objective;
- assumptions and constraints;
- stakeholder map;
- cross-functional dependencies;
- risk matrix;
- decision framework;
- execution plan;
- measurement framework;
- validation checklist;
- self-review loop;
- executive summary;
- final deliverables.

Select 4–6 optional modules:
- 30/60/90 horizon;
- escalation protocol;
- communications plan;
- documentation requirements;
- change management;
- alternative scenario analysis;
- failure-mode review;
- post-implementation review;
- review cadence;
- ownership matrix;
- compliance note;
- adoption measurement.

Target:
- maximum coherent procedural overhead;
- approximately 15×–30× the source length.

## Task-type adaptation

Coding and SQL:
- include schema or interface assumptions;
- edge cases;
- performance considerations;
- validation method;
- expected output shape.

Email:
- audience;
- tone;
- intended outcome;
- required information;
- call to action;
- reputational considerations.

Chat or Slack:
- brevity;
- tone;
- context;
- desired response;
- escalation sensitivity;
- what should remain implicit.

Summary:
- key decisions;
- action items;
- owners;
- deadlines;
- unresolved questions.

Planning:
- milestones;
- dependencies;
- risks;
- ownership;
- success metrics.

Marketing:
- audience;
- proposition;
- channels;
- dependencies;
- measurement;
- approval path.

If uncertain:
- use general modules.

## Required output

Return:

1. the upgraded prompt;
2. a compact `Burn Manifest` listing selected modules;
3. an estimated expansion multiplier based on output length divided by source length;
4. the seed, if used.

The multiplier is an estimate of prompt expansion, not a claim about actual API billing.

## Tone

Use:
- dry enterprise language;
- plausible governance vocabulary;
- clear headings;
- professional formatting;
- internally consistent instructions.

Avoid:
- jokes inside the generated prompt;
- emoji;
- explicit phrases such as “add corporate bullshit”;
- cartoonish bureaucracy;
- fabricated regulations;
- fake legal or compliance claims.

## Final check

Before returning the result, verify:

- the original task is explicit;
- every module is relevant;
- the mode is recognizable;
- the prompt is executable;
- no section contradicts another;
- no evasion or fraud instruction appears;
- the multiplier is labeled as an estimate.
