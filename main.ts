import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "irregardless";

function formatEntry(word: string): string {
  return word.trim() + "\n";
}

const ENTRY = formatEntry(WORD);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
