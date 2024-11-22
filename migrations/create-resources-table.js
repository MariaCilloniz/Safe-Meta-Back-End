/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema.createTable("resources", (table) => {
		table.increments("id").primary();
		table.string("image").notNullable();
		table.string("title").notNullable();
		table.string("subtitle").notNullable();
		table.string("link").notNullable();
	});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema.dropTable("resources");
}
