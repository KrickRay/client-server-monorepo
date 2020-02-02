import { BaseEntity, Repository, FindConditions, DeepPartial } from "typeorm";

export async function findOrCreate<E extends BaseEntity>(
    repository: Repository<E>,
    findCondition: DeepPartial<E>,
    autosave = false
) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let foundEntity = await repository.findOne((findCondition as any) as FindConditions<E>);
    if (!foundEntity) {
        foundEntity = repository.create(findCondition);
        if (autosave) {
            foundEntity.save();
        }
    }
    return foundEntity;
}
