import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Artist } from "./Artist";

@Entity()
export class Song extends BaseEntity {
	@PrimaryColumn()
	songId: number;

	@Column({ nullable: false })
	title: string;

	@ManyToOne(() => Artist)
	artistId: string;

	@Column({ nullable: false })
	language: string;

	@Column({ nullable: false })
	streams: number;
}
