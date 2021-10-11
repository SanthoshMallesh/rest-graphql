import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  Default,
} from "sequelize-typescript";

@Table({
  tableName: "app_type",
  timestamps: true,
})
export default class AppType extends Model<AppType> {
  @Column
  name!: string;

  @Default(true)
  @Column
  enabled!: boolean;

  @CreatedAt
  createdDate!: Date;

  @UpdatedAt
  updateDate!: Date;
}
