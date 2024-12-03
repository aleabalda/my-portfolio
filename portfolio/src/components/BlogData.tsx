export interface BlogPost {
  title: string;
  summary: string;
  tags: string[];
  unreleased: boolean;
}

export const BlogData: BlogPost[] = [
  {
    title: "Passwords Are Not Enough",
    summary:
      "One of the biggest weaknesses? Passwords. In fact, 81% of data breaches are caused by weak or stolen passwords, leaving your sensitive information credit card details, personal identification numbers, and more vulnerable to attacks. Many people still rely on simple, easily guessable passwords like their pet’s name or birth-date. With cyber-criminals growing more sophisticated, relying solely on passwords to protect your sensitive data is a gamble you can’t afford to take. That’s where Multi-Factor Authentication (MFA) steps in, adding a crucial extra layer of defence that significantly enhances security.",
    tags: ["MFA", "Cybersecurity", "Authentication"],
    unreleased: false,
  },
  {
    title: "Title",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tags: ["Test", "placeholder"],
    unreleased: true,
  },
  {
    title: "Title",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tags: ["placeholder two", "placeholder", "test"],
    unreleased: true,
  },
];
