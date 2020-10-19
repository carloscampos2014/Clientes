import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class customers1603107429932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "customers",
        columns: [
          {
            name: "user_id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "text",
          },
          {
            name: "cellphone",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "zipcode",
            type: "varchar",
          },
          {
            name: "number",
            type: "varchar",
          },
          {
            name: "complement",
            type: "varchar",
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "district",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "country",
            type: "varchar",
          },
          {
            name: "obs",
            type: "text",
          },
        ],
        foreignKeys: [
          {
            name: "CustomersUser",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.dropTable('customers');
  }
}
