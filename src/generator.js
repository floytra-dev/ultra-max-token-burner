const MODE_CONFIG = {
  medium: {
    required: ["role", "objective", "assumptions", "execution", "validation", "format"],
    optional: ["stakeholders", "dependencies", "risks", "success", "ownership", "decisionContext"],
    optionalCount: [1, 2],
    label: "Medium",
  },
  max: {
    required: ["role", "objective", "assumptions", "stakeholders", "crossFunctional", "risks", "execution", "validation", "deliverables", "executiveSummary"],
    optional: ["alternatives", "decisionCriteria", "escalation", "measurement", "implementationSequence", "communications", "ownership", "reviewCadence"],
    optionalCount: [2, 4],
    label: "Max",
  },
  "ultra-max": {
    required: ["role", "governance", "objective", "assumptions", "stakeholders", "crossFunctional", "riskMatrix", "decisionFramework", "execution", "measurement", "validation", "selfReview", "executiveSummary", "deliverables"],
    optional: ["horizon", "escalation", "communications", "documentation", "changeManagement", "scenarioAnalysis", "failureModes", "postImplementation", "reviewCadence", "ownershipMatrix", "complianceNote", "adoptionMeasurement"],
    optionalCount: [4, 6],
    label: "Ultra Max",
  },
};

const MODULES = {
  role: {
    headings: ["Role and Mandate", "Operating Context", "Assigned Role"],
    variants: [
      "Act as a senior cross-functional operator responsible for producing an execution-ready result with clear ownership, practical constraints, and reviewable logic.",
      "Approach the task as an experienced operator accountable for clarity, feasibility, stakeholder readiness, and final delivery quality.",
      "Work as a pragmatic specialist who must convert the request into an actionable, leadership-ready output with minimal ambiguity.",
    ],
  },
  governance: {
    headings: ["Governance Context", "Decision Governance", "Operating Governance"],
    variants: [
      "Define decision rights, approval requirements, ownership boundaries, escalation thresholds, and the review cadence needed to execute the task.",
      "Establish an explicit governance layer covering accountability, sign-off, exception handling, and ongoing oversight.",
      "Specify who decides, who executes, what requires approval, and how unresolved issues should be escalated.",
    ],
  },
  objective: {
    headings: ["Expanded Objective", "Required Outcome", "Primary Objective"],
    variants: [
      "Translate the original task into a complete outcome that is practical, reviewable, and ready for execution.",
      "Expand the request into a clearly bounded objective with an explicit result, audience, and definition of done.",
      "Produce a final result that addresses the request while making assumptions, dependencies, and delivery expectations explicit.",
    ],
  },
  assumptions: {
    headings: ["Assumptions and Constraints", "Working Assumptions", "Operating Constraints"],
    variants: [
      "State the assumptions required to proceed and flag any missing context that could materially change the result.",
      "Make implicit assumptions explicit, distinguish facts from inference, and identify constraints that may affect execution.",
      "Document the operating assumptions, known limits, and unresolved questions before producing the final answer.",
    ],
  },
  stakeholders: {
    headings: ["Stakeholder Alignment", "Stakeholder Map", "Alignment Requirements"],
    variants: [
      "Identify decision-makers, implementers, reviewers, and anyone likely to introduce dependencies, objections, or approval requirements.",
      "Map relevant stakeholders, their incentives, likely concerns, and the information each group needs to move forward.",
      "Account for stakeholder priorities, approval paths, points of friction, and the communication required to maintain alignment.",
    ],
  },
  crossFunctional: {
    headings: ["Cross-Functional Considerations", "Dependency Surface", "Operational Interfaces"],
    variants: [
      "Identify cross-functional inputs, ownership handoffs, operational dependencies, and potential coordination gaps.",
      "Map the teams, systems, decisions, and external inputs required for successful execution.",
      "Review the task for coordination needs across functions, including handoffs, sequencing, and shared accountability.",
    ],
  },
  risks: {
    headings: ["Risks and Dependencies", "Execution Risks", "Operational Considerations"],
    variants: [
      "Identify operational risks, unresolved dependencies, and assumptions that could delay or weaken execution.",
      "Document foreseeable failure points, ownership gaps, external dependencies, and mitigation options.",
      "Review the task for hidden constraints, implementation risks, and likely sources of delay or disagreement.",
    ],
  },
  riskMatrix: {
    headings: ["Risk Matrix", "Risk and Control Matrix", "Failure-Risk Register"],
    variants: [
      "Create a compact risk matrix covering likelihood, impact, owner, early warning signal, and mitigation.",
      "Assess key risks by probability and consequence, then assign ownership and a practical control for each.",
      "Build a reviewable risk register with severity, trigger conditions, accountable owner, and response path.",
    ],
  },
  execution: {
    headings: ["Execution Plan", "Recommended Workflow", "Delivery Approach"],
    variants: [
      "Break the work into a clear sequence of actions with ownership, dependencies, and completion criteria.",
      "Provide an implementation-ready workflow showing what happens first, what follows, and how completion is verified.",
      "Translate the recommendation into ordered actions, responsible roles, and explicit handoffs.",
    ],
  },
  validation: {
    headings: ["Validation Requirements", "Quality Control", "Execution Verification"],
    variants: [
      "Before finalizing, check completeness, internal consistency, feasibility, missing dependencies, and alignment with the original task.",
      "Run a final quality review for unsupported assumptions, contradictory recommendations, unclear ownership, and execution gaps.",
      "Verify that the result is usable, logically consistent, appropriately scoped, and ready for the intended audience.",
    ],
  },
  format: {
    headings: ["Final Response Format", "Delivery Format", "Output Requirements"],
    variants: [
      "Return the final answer in a concise, structured format that can be used without additional interpretation.",
      "Use clear headings, concrete actions, and a final deliverable that is ready to copy, send, or implement.",
      "Present the answer in the exact format most useful for the task, followed by any essential assumptions or caveats.",
    ],
  },
  deliverables: {
    headings: ["Required Deliverables", "Final Outputs", "Delivery Requirements"],
    variants: [
      "Provide the primary deliverable, a concise rationale, key assumptions, ownership, risks, and immediate next steps.",
      "Return a leadership-ready summary plus the complete execution artifact and validation checklist.",
      "Produce the final artifact together with the minimum supporting material required for approval and implementation.",
    ],
  },
  executiveSummary: {
    headings: ["Executive Summary", "Leadership Summary", "Decision Summary"],
    variants: [
      "Begin with a concise summary of the recommendation, expected outcome, main trade-off, and immediate next action.",
      "Open with a leadership-ready overview covering the proposed direction, rationale, and required decision.",
      "Provide a compact summary of what should be done, why it matters, and what happens next.",
    ],
  },
  selfReview: {
    headings: ["Self-Review Loop", "Internal Quality Pass", "Pre-Delivery Review"],
    variants: [
      "Perform a structured self-review covering feasibility, completeness, risk exposure, stakeholder alignment, and implementation readiness.",
      "Review the proposed output for unsupported assumptions, missing dependencies, contradictions, and unclear ownership; revise before returning it.",
      "Run an internal quality-control pass and strengthen any section that lacks evidence, clarity, or execution detail.",
    ],
  },
  measurement: {
    headings: ["Measurement Framework", "Success Measurement", "Outcome Metrics"],
    variants: [
      "Define measurable indicators, data sources, review frequency, responsible owner, and thresholds for intervention.",
      "Specify how progress and quality will be measured, including leading indicators, outcome metrics, and review cadence.",
      "Create a practical measurement model linking actions to observable results and decision triggers.",
    ],
  },
  dependencies: {
    headings: ["Dependency Check", "Required Inputs", "Execution Dependencies"],
    variants: [
      "List the inputs, approvals, systems, and external conditions required before execution can begin.",
      "Identify any dependency that could block, delay, or materially alter the final result.",
      "Clarify required information, ownership handoffs, and prerequisites.",
    ],
  },
  success: {
    headings: ["Success Criteria", "Definition of Done", "Completion Criteria"],
    variants: [
      "Define observable completion criteria and the minimum conditions required to consider the task successful.",
      "State how success will be recognized, measured, and accepted by the relevant stakeholder.",
      "Specify the expected result, quality threshold, and evidence of completion.",
    ],
  },
  ownership: {
    headings: ["Ownership", "Accountability", "Responsible Roles"],
    variants: [
      "Assign a clear owner to each major action and identify who reviews or approves the result.",
      "Clarify accountable ownership, supporting roles, and handoff points.",
      "Name the role responsible for delivery, review, and escalation.",
    ],
  },
  decisionContext: {
    headings: ["Decision Context", "Decision Requirements", "Required Decision"],
    variants: [
      "Clarify the decision this output is intended to support and the information needed to make it.",
      "State who must decide what, by when, and on the basis of which criteria.",
      "Frame the output around the decision or action it should enable.",
    ],
  },
  alternatives: {
    headings: ["Alternative Approaches", "Options Considered", "Execution Options"],
    variants: [
      "Provide two viable alternatives, with trade-offs, risks, and conditions under which each is preferable.",
      "Compare the recommended approach with realistic alternatives using consistent decision criteria.",
      "Identify credible options and explain why the preferred route offers the strongest balance of speed, quality, and risk.",
    ],
  },
  decisionCriteria: {
    headings: ["Decision Criteria", "Evaluation Framework", "Selection Criteria"],
    variants: [
      "Define the criteria used to evaluate options, including impact, feasibility, cost, speed, and reversibility.",
      "Use an explicit decision framework so alternatives are assessed consistently.",
      "State the criteria and weighting that determine the preferred option.",
    ],
  },
  escalation: {
    headings: ["Escalation Protocol", "Exception Path", "Escalation Rules"],
    variants: [
      "Define triggers, responsible roles, response time, and the information required for escalation.",
      "Specify when normal execution should stop and an issue should move to a higher decision level.",
      "Create a clear exception path for unresolved risks, blocked dependencies, or missed thresholds.",
    ],
  },
  implementationSequence: {
    headings: ["Implementation Sequence", "Rollout Order", "Execution Sequence"],
    variants: [
      "Sequence the work into practical stages with entry criteria, exit criteria, and accountable owners.",
      "Provide an ordered rollout path that protects critical dependencies and allows early validation.",
      "Define the implementation order, major handoffs, and checkpoints.",
    ],
  },
  communications: {
    headings: ["Communications Plan", "Stakeholder Communications", "Communication Cadence"],
    variants: [
      "Define the audience, message, channel, owner, timing, and required feedback loop.",
      "Provide a concise communication plan for decision-makers, implementers, and affected stakeholders.",
      "Specify what each stakeholder group needs to hear, from whom, and at what point in execution.",
    ],
  },
  reviewCadence: {
    headings: ["Review Cadence", "Operating Rhythm", "Governance Rhythm"],
    variants: [
      "Set a review cadence with named owners, required inputs, decisions, and follow-up actions.",
      "Define when progress is reviewed, what evidence is presented, and who can change course.",
      "Establish a lightweight operating rhythm for progress, risk, and decision review.",
    ],
  },
  horizon: {
    headings: ["30/60/90 Horizon", "Phased Delivery Horizon", "Implementation Horizon"],
    variants: [
      "Translate the recommendation into 30-, 60-, and 90-day phases with milestones, owners, dependencies, and measurable outcomes.",
      "Provide a phased 30/60/90 plan covering immediate action, stabilization, and scaled implementation.",
      "Organize execution into 30-, 60-, and 90-day horizons with explicit outcomes and decision gates.",
    ],
  },
  documentation: {
    headings: ["Documentation Requirements", "Evidence and Documentation", "Record of Decision"],
    variants: [
      "Specify the artifacts, decisions, assumptions, and evidence that must be documented for future review.",
      "Define the minimum documentation required to preserve context, ownership, and rationale.",
      "Create a record of decisions, dependencies, exceptions, and validation results.",
    ],
  },
  changeManagement: {
    headings: ["Change Management", "Adoption Plan", "Operational Adoption"],
    variants: [
      "Address adoption risks, affected behaviors, training needs, communication, and reinforcement mechanisms.",
      "Provide a lightweight change plan covering readiness, rollout, support, and adoption measurement.",
      "Identify what people must understand or do differently and how that change will be supported.",
    ],
  },
  scenarioAnalysis: {
    headings: ["Scenario Analysis", "Alternative Scenarios", "Contingency Scenarios"],
    variants: [
      "Assess a base case, downside case, and upside case, including triggers and recommended responses.",
      "Test the recommendation against plausible changes in timing, resources, stakeholder support, or demand.",
      "Provide alternative scenarios and identify which assumptions would cause the plan to change.",
    ],
  },
  failureModes: {
    headings: ["Failure-Mode Review", "Failure Conditions", "Pre-Mortem"],
    variants: [
      "Run a concise pre-mortem identifying how the plan could fail, early warning signs, and preventive controls.",
      "Identify likely failure modes, causes, detection signals, and recovery actions.",
      "Review the plan from the perspective of avoidable breakdowns and hidden fragility.",
    ],
  },
  postImplementation: {
    headings: ["Post-Implementation Review", "Outcome Review", "Post-Launch Review"],
    variants: [
      "Define a post-implementation review covering outcomes, deviations, lessons, ownership, and follow-up actions.",
      "Specify how results will be evaluated after delivery and how findings will change future execution.",
      "Create a closeout review for impact, quality, unresolved risks, and lessons learned.",
    ],
  },
  ownershipMatrix: {
    headings: ["Ownership Matrix", "RACI-Style Ownership", "Accountability Matrix"],
    variants: [
      "Create a compact ownership matrix identifying accountable, responsible, consulted, and informed roles.",
      "Map each major workstream to an accountable owner and supporting stakeholders.",
      "Clarify decision ownership and delivery responsibility across the full workflow.",
    ],
  },
  complianceNote: {
    headings: ["Policy and Compliance Note", "Control Considerations", "Policy Check"],
    variants: [
      "Identify applicable internal policies or controls without inventing legal or regulatory requirements.",
      "Flag any policy, privacy, security, or approval consideration that should be verified before execution.",
      "Include a concise check for relevant internal controls and required approvals.",
    ],
  },
  adoptionMeasurement: {
    headings: ["Adoption Measurement", "Usage Visibility", "Adoption Indicators"],
    variants: [
      "Define observable adoption indicators, responsible owner, review frequency, and intervention thresholds.",
      "Specify how actual use, behavior change, and sustained adoption will be measured.",
      "Create a small set of adoption signals that distinguish activity from meaningful use.",
    ],
  },
};

function mulberry32(seed) {
  return function rand() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function choose(items, rand) {
  return items[Math.floor(rand() * items.length)];
}

function shuffled(items, rand) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function detectTaskType(prompt) {
  const p = prompt.toLowerCase();
  if (/\b(sql|query|database|code|function|bug|api|javascript|python)\b/.test(p)) return "coding";
  if (/\b(email|mail|subject line)\b/.test(p)) return "email";
  if (/\b(slack|chat|reply|message)\b/.test(p)) return "chat";
  if (/\b(summary|summarize|notes|minutes)\b/.test(p)) return "summary";
  if (/\b(plan|roadmap|launch|strategy)\b/.test(p)) return "planning";
  if (/\b(campaign|marketing|positioning|brand)\b/.test(p)) return "marketing";
  if (/\b(analyze|analysis|compare|evaluate)\b/.test(p)) return "analysis";
  return "general";
}

const TASK_ADAPTATION = {
  coding: "Include relevant interface or schema assumptions, edge cases, performance considerations, a validation method, and the expected output shape.",
  email: "Account for the audience, tone, intended outcome, required information, call to action, and reputational considerations.",
  chat: "Preserve appropriate brevity while clarifying tone, context, desired response, escalation sensitivity, and what should remain implicit.",
  summary: "Extract key decisions, action items, owners, deadlines, unresolved questions, and the minimum context needed for follow-through.",
  planning: "Include milestones, dependencies, risks, ownership, success metrics, and decision gates.",
  marketing: "Include audience, proposition, channels, dependencies, approval path, measurement, and likely points of resistance.",
  analysis: "Define the decision question, evidence standard, comparison criteria, uncertainty, and final recommendation format.",
  general: "Adapt the procedural layers to the actual task and exclude any module that does not improve execution.",
};

export function generatePrompt({ prompt, mode = "medium", seed } = {}) {
  const cleanPrompt = String(prompt || "").trim();
  if (!cleanPrompt) throw new Error("A non-empty prompt is required.");
  if (!MODE_CONFIG[mode]) throw new Error(`Unknown mode: ${mode}`);

  const numericSeed = Number.isInteger(seed)
    ? seed
    : (hashString(cleanPrompt) ^ Date.now()) >>> 0;
  const rand = mulberry32(numericSeed);
  const config = MODE_CONFIG[mode];

  const [minOptional, maxOptional] = config.optionalCount;
  const optionalCount = minOptional + Math.floor(rand() * (maxOptional - minOptional + 1));
  const selectedOptional = shuffled(config.optional, rand).slice(0, optionalCount);
  const selected = [...config.required, ...selectedOptional];

  const early = selected.filter((id) => ["role", "governance", "objective"].includes(id));
  const flexible = shuffled(
    selected.filter((id) => !early.includes(id) && !["validation", "selfReview", "executiveSummary", "deliverables", "format"].includes(id)),
    rand
  );
  const late = selected.filter((id) => ["validation", "selfReview", "executiveSummary", "deliverables", "format"].includes(id));
  const ordered = [...early, ...flexible, ...late];

  const taskType = detectTaskType(cleanPrompt);
  const sections = [];

  for (const id of ordered) {
    const module = MODULES[id];
    if (!module) continue;
    sections.push({
      id,
      heading: choose(module.headings, rand),
      text: choose(module.variants, rand),
    });
  }

  const lines = [];
  lines.push(`# ${config.label} Token Spend Upgrade`);
  lines.push("");
  lines.push(`## Original Task`);
  lines.push("");
  lines.push(cleanPrompt);
  lines.push("");
  lines.push(`## Task-Type Adaptation`);
  lines.push("");
  lines.push(TASK_ADAPTATION[taskType]);
  lines.push("");

  for (const section of sections) {
    lines.push(`## ${section.heading}`);
    lines.push("");
    lines.push(section.text);
    lines.push("");
  }

  lines.push("## Final Instruction");
  lines.push("");
  lines.push("Complete the original task using the structure above. Return the requested artifact first, followed by only the supporting rationale, assumptions, risks, and validation material needed to make it executable.");
  lines.push("");

  const output = lines.join("\n");
  const sourceWords = cleanPrompt.split(/\s+/).length;
  const outputWords = output.split(/\s+/).length;
  const multiplier = Math.round((outputWords / Math.max(sourceWords, 8)) * 10) / 10;

  return {
    mode,
    label: config.label,
    seed: numericSeed,
    taskType,
    selectedModules: ordered,
    optionalModules: selectedOptional,
    sourceWords,
    outputWords,
    estimatedExpansionMultiplier: multiplier,
    output,
  };
}
