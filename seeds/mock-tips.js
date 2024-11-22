/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("tips").del();
  await knex("tips").insert([
    {
      id: 1,
      tip: "Encourage your child to explore educational reels for learning.",
      category: "AI Engagement",
      description:
        "AI-powered reels can be an educational tool if guided properly. Encourage your child to seek out educational content.",
    },
    {
      id: 2,
      tip: "Discuss the impact of AI recommendations with your child.",
      category: "AI Engagement",
      description:
        "Help your child understand that AI recommendations are based on their past behavior and interests, and explain how it might limit their exposure to diverse content.",
    },
    {
      id: 3,
      tip: "Review AR filters your child frequently uses.",
      category: "AI Interaction",
      description:
        "AR filters can influence your child’s self-image. Regularly review what filters they’re using to ensure they’re appropriate and not causing any harm.",
    },
    {
      id: 4,
      tip: "Set time limits for AI-powered features like Reels and chatbots.",
      category: "Time Management",
      description:
        "Limit the time your child spends on AI-powered content platforms, such as Reels, to ensure a balanced digital lifestyle.",
    },
    {
      id: 5,
      tip: "Have regular conversations with your child about the types of content AI recommends.",
      category: "Communication",
      description:
        "Keep an open line of communication. Talk about what content AI suggests and discuss whether it aligns with your family’s values.",
    },
    {
      id: 6,
      tip: "Teach your child to be critical of AI-generated content and its effects on their behavior.",
      category: "Critical Thinking",
      description:
        "Encourage your child to think critically about the content they see and question whether it’s influencing their behavior in ways they’re comfortable with.",
    },
    {
      id: 7,
      tip: "Monitor the frequency of AI-driven interactions, such as chatbot messages or ad recommendations.",
      category: "Behavior Monitoring",
      description:
        "Regularly check how often your child interacts with AI-driven features and ensure that these interactions align with your family’s expectations.",
    },
    {
      id: 8,
      tip: "Help your child understand how data is used to influence AI recommendations.",
      category: "Data Awareness",
      description:
        "Explain how the data collected from their interactions with Meta’s platforms helps to shape the recommendations they see and emphasize the importance of privacy.",
    },
    {
      id: 9,
      tip: "Discuss privacy settings with your child to ensure their information is protected.",
      category: "Privacy",
      description:
        "Ensure your child understands the privacy settings and how to control the data shared with Meta. Reinforce the importance of keeping personal information secure.",
    },
    {
      id: 10,
      tip: "Encourage your child to explore diverse content to avoid AI creating a narrow content bubble.",
      category: "Content Exploration",
      description:
        "Encourage your child to seek a variety of content, so they don't get trapped in a content bubble created by AI recommendations.",
    },
    {
      id: 11,
      tip: "Ensure that your child’s accounts are set to age-appropriate settings.",
      category: "Account Settings",
      description:
        "Make sure that your child’s Meta account is set up with appropriate privacy settings and is tailored to their age group to avoid exposure to unsuitable content.",
    },
    {
      id: 12,
      tip: "Monitor your child’s interactions with AI chatbots to ensure healthy conversations.",
      category: "AI Interaction",
      description:
        "If your child interacts with AI-powered chatbots, monitor these conversations to make sure they are productive and appropriate.",
    },
    {
      id: 13,
      tip: "Teach your child about the potential dangers of AI-driven ads.",
      category: "Advertising Awareness",
      description:
        "Make your child aware that AI-driven ads may influence their purchasing decisions. Teach them how to distinguish between helpful ads and manipulative ones.",
    },
    {
      id: 14,
      tip: "Review AI recommendations together to ensure that content aligns with your family’s values.",
      category: "Family Values",
      description:
        "Sit down with your child to review the content AI suggests to them, and discuss whether it reflects your family’s values and expectations.",
    },
    {
      id: 15,
      tip: "Teach your child about digital footprints and the lasting impact of online activity.",
      category: "Digital Literacy",
      description:
        "Help your child understand that everything they do online, including AI-driven interactions, can leave a digital footprint that may have lasting effects.",
    },
  ]);
}
