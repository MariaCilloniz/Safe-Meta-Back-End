/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("logs").del();
  await knex("logs").insert([
    {
      id: 1,
      platform: "Instagram",
      feature: "Reels",
      count: 15,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 2,
      platform: "Facebook",
      feature: "AI-Recommended Groups",
      count: 8,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 3,
      platform: "Messenger",
      feature: "AI Chatbot Conversations",
      count: 5,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 4,
      platform: "Instagram",
      feature: "AR Filters",
      count: 12,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 5,
      platform: "Facebook",
      feature: "AI-Suggested Ads",
      count: 6,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 6,
      platform: "WhatsApp",
      feature: "Business AI Chatbots",
      count: 4,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 7,
      platform: "Instagram",
      feature: "Suggested Posts",
      count: 9,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 8,
      platform: "Facebook",
      feature: "Video Recommendations",
      count: 10,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 9,
      platform: "Messenger",
      feature: "AI-Replied Messages",
      count: 7,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 10,
      platform: "Instagram",
      feature: "Reels AI Suggestions",
      count: 14,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 11,
      platform: "Facebook",
      feature: "Group Recommendations",
      count: 5,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 12,
      platform: "WhatsApp",
      feature: "AI Automated Replies",
      count: 3,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 13,
      platform: "Instagram",
      feature: "Trending Reels",
      count: 20,
      lastActivity: "2024-11-20 15:30:00",
    },
    {
      id: 14,
      platform: "Facebook",
      feature: "Event Recommendations",
      count: 4,
      lastActivity: "2024-11-20 15:30:00",
    },
  ]);
}
