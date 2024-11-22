/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const resourceData = [
	{
		id: 1,
		image: "/images/image2.png",
		title:
			"The future is here: Understanding generative AI through media literacy",
		subtitle:
			"Learning how to ask questions and think deeply about the information you are consuming and creating.",
		link: "https://familycenter.meta.com/ca/education/resources/understanding-generative-ai-through-media-literacy/",
	},
	{
		id: 2,
		image: "/images/image1.png",
		title: "Identifying deepfakes | Justin W. Patchin and Sameer Hinduja",
		subtitle:
			"Deepfakes are becoming increasingly realistic as technology advances, detecting them is important.",
		link: "https://familycenter.meta.com/ca/education/resources/what-are-deepfakes/",
	},
	{
		id: 3,
		image: "/images/image3.png",
		title: "Parent's guide to generative AI",
		subtitle:
			"Learn about generative AI and how you can help your teen use it safely, appropriately and productively.",
		link: "https://familycenter.meta.com/ca/education/resources/parents-guide-to-generative-ai/",
	},
];
export async function seed(knex) {
	// Deletes ALL existing entries
	await knex("resources").del();
	await knex("resources").insert(resourceData);
}
