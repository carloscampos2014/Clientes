import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1603033382856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name:"id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    isGenerated: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "text"
                },
                {
                    name: "password",
                    type: "varchar"
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.dropTable('users');
    }

}
