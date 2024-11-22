/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const resourceData = [
	{
		id: 1,
		image: "/images/image4.png",
		title: "Privacy Matters: Meta’s Generative AI Features",
		subtitle:
			"Important privacy safeguards in our new generative AI features to protect people’s information and help them understand how the features work.",
		link: "https://about.fb.com/news/2023/09/privacy-matters-metas-generative-ai-features/",
	},
	{
		id: 2,
		image: "/images/image6.png",
		title: "How AI Influences What You See on Facebook and Instagram",
		subtitle:
			"Sharing more details about how our AI systems rank content for your Feed, Reels, Stories, and other surfaces. We’re making it easier for you to control what you see on Facebook and Instagram.",
		link: "https://about.fb.com/news/2023/06/how-ai-ranks-content-on-facebook-and-instagram/",
	},
	{
		id: 3,
		image: "/images/image3.png",
		title: "Parent's guide to generative AI",
		subtitle:
			"Learn about generative AI and how you can help your teen use it safely, appropriately and productively.",
		link: "https://familycenter.meta.com/ca/education/resources/parents-guide-to-generative-ai/",
	},
	{
		id: 4,
		image: "/images/image7.png",
		title: "Using AI to Animate Children’s Drawings",
		subtitle:
			"Parents can upload their children’s drawings to our prototype system and watch them become moving characters that dance, skip and jump",
		link: "https://about.fb.com/news/2021/12/using-ai-to-animate-childrens-drawings/",
	},
	{
		id: 5,
		image: "/images/image1.png",
		title: "Identifying deepfakes | Justin W. Patchin and Sameer Hinduja",
		subtitle:
			"Deepfakes are becoming increasingly realistic as technology advances, detecting them is important.",
		link: "https://familycenter.meta.com/ca/education/resources/what-are-deepfakes/",
	},
	{
		id: 6,
		image: "/images/image2.png",
		title:
			"The future is here: Understanding generative AI through media literacy",
		subtitle:
			"Learning how to ask questions and think deeply about the information you are consuming and creating.",
		link: "https://familycenter.meta.com/ca/education/resources/understanding-generative-ai-through-media-literacy/",
	},
	{
		id: 7,
		image: "/images/image5.png",
		title:
			"Introducing New AI Experiences Across Our Family of Apps and Devices",
		subtitle:
			"These new AI experiences also come with a new set of challenges for our industry. We’re rolling out our new AIs slowly and have built in safeguards.",
		link: "https://about.fb.com/news/2023/09/introducing-ai-powered-assistants-characters-and-creative-tools/",
	},
];
export async function seed(knex) {
	// Deletes ALL existing entries
	await knex("resources").del();
	await knex("resources").insert(resourceData);
}
