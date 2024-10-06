import { uniqueNamesGenerator, type Config, adjectives, colors, animals, names } from "unique-names-generator";

const NAME_KEY = "name"
export const useName = () => {
  const sessionName = sessionStorage.getItem(NAME_KEY);

  if (sessionName) {
    return sessionName
  }

  // Not saved, create and save a new one!
  const nameConfig: Config = {
    length: 2,
    separator: " ",
    style: "capital",
    dictionaries: [adjectives, animals],
  };

  const newName = uniqueNamesGenerator(nameConfig);
  sessionStorage.setItem(NAME_KEY, newName)

  return newName
}
