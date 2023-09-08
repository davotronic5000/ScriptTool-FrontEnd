export interface ScriptSubmission {
  name: string;
  colour: string;
  type: "teenseyville" | "ravenswood-bluff" | "phobos";
  roles: Role[];
  modern?: boolean;
  colourise?: boolean;
}

export interface Role {
  id: string;
  name: string?;
  edition: string?;
  team: string?;
  firstNight: number?;
  firstNightReminder: string?;
  otherNight: number?;
  otherNightReminder: string?;
  reminders: string[]?;
  setup: boolean?;
  ability: string?;
  image: string?;
  remindersGlobal: string?;
  colour: string?;
}
