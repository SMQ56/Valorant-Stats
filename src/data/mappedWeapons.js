const wallPenetrationMap = {
  "EWallPenetrationDisplayType::Low": "Low",
  "EWallPenetrationDisplayType::Medium": "Medium",
  "EWallPenetrationDisplayType::High": "High",
};

export function mappedWeapons(weapons) {
  return weapons.map((w) => ({
    uuid: w.uuid,
    name: w.displayName || "Unknown Weapon",
    category: w.shopData?.category || w.shopData?.categoryText || w.category?.split("::")[1],
    image: w.displayIcon || "/assets/placeholder.png",

    weaponStats: w.weaponStats && {
      fireRate: w.weaponStats.fireRate,
      magazineSize: w.weaponStats.magazineSize,
      reloadTimeSeconds: w.weaponStats.reloadTimeSeconds,
      wallPenetration: wallPenetrationMap[w.weaponStats.wallPenetration],
      damageRanges: w.weaponStats.damageRanges?.map((d) => ({
        rangeStartMeters: d.rangeStartMeters,
        rangeEndMeters: d.rangeEndMeters,
        headDamage: d.headDamage,
        bodyDamage: d.bodyDamage,
        legDamage: d.legDamage,
      })),
    },

    shopData: w.shopData && {
      cost: w.shopData.cost,
      category: w.shopData.category,
      categoryText: w.shopData.categoryText,
    },

    skins: w.skins?.map((skin) => ({
      uuid: skin.uuid,
      displayName: skin.displayName,
      displayIcon: skin.displayIcon,
      wallpaper: skin.wallpaper,

      chromas: skin.chromas?.map((c) => ({
        displayName: c.displayName,
        displayIcon: c.displayIcon,
        streamedVideo: c.streamedVideo,
      })),

      levels: skin.levels?.map((l) => ({
        displayName: l.displayName,
        displayIcon: l.displayIcon,
        streamedVideo: l.streamedVideo,
      })),
    })),
  }));
}
