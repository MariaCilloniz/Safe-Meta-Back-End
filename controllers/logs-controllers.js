import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const index = async (_req, res) => {
  try {
    const data = await knex("logs");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving AI logs: ${err}`);
  }
};

export { index };
