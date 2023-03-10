import { DATABASE_NAMES } from '../../constants';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  PrimaryColumn,
} from 'typeorm';

@Entity({
  name: DATABASE_NAMES.PERMISSIONS,
})
export class Permission extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar', { default: '', nullable: true })
  description: string;

  @Column('varchar', { default: null, nullable: true })
  group: string;

  @Column('boolean', { default: false })
  isGroup: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'NOW()',
  })
  createdAt: number;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'NOW()',
    onUpdate: 'NOW()',
  })
  updatedAt: number;

  constructor(partial: Partial<Permission>) {
    super();
    Object.assign(this, partial);
  }
}
