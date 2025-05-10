export class Mapper {
  static toEntity<DTO, Entity>(dto: DTO, extra: Partial<Entity> = {}): Entity {
    return {
      ...(dto as any),
      ...extra,
    };
  }

  static toDto<Entity, DTO>(model: Entity, keys: (keyof Entity)[]): DTO {
    const dto: Partial<DTO> = {};
    keys.forEach((key) => {
      (dto as any)[key] = model[key];
    });
    return dto as DTO;
  }
}
