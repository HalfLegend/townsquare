export function drawRoles(roleNameList, roleCount) {
  if (roleCount < 0) {
    alert("游戏人数不可小于0");
  }
  if (roleCount > roleNameList.length) {
    alert("游戏人数不可比角色数多");
  }

  let result = [];
  for (let i = 0; i < roleCount; i++) {
    result.push(drawOne(roleNameList));
  }
  return result;
}

export function selectOne(roleNameList) {
  let r = Math.floor(Math.random() * roleNameList.length);
  return [roleNameList[r], r];
}

export function drawOne(roleNameList) {
  let [result, r] = selectOne(roleNameList);
  roleNameList.splice(r, 1);
  return result;
}

export function rollAllRole(
  villagers,
  villagerCount,
  visitors,
  visitorCount,
  minions,
  minionCount,
  devils,
  devilCount
) {
  villagers = [...villagers];
  visitors = [...visitors];
  minions = [...minions];
  devils = [...devils];

  let result = [];
  result.push(...drawRoles(devils, devilCount));
  result.push(...drawRoles(minions, minionCount));

  let found = result.findIndex(value => {
    return value.id === "baron";
  });

  if (found >= 0) {
    villagerCount -= 2;
    visitorCount += 2;
  }

  let goodResult = [];
  goodResult.push(...drawRoles(visitors, visitorCount));
  goodResult.push(...drawRoles(villagers, villagerCount));

  found = goodResult.findIndex(value => {
    return value.id === "fortuneteller";
  });

  if (found >= 0) {
    let nemesis = selectOne(goodResult)[0];
    nemesis.isNemesis = true;
  }

  found = goodResult.findIndex(value => {
    return value.id === "drunk";
  });

  if (found >= 0) {
    goodResult[found] = drawOne(villagers);
    goodResult[found].isDrunk = true;
  }

  result.push(...goodResult);
  //
  // found = goodResult.findIndex((value, index, obj) => {
  //   return value === "陌客";
  // });
  //
  // if (found >= 0) {
  //   let fake = drawOne(minions);
  //   result[found] = result[found] + "-" + fake;
  // }

  let dd = [];
  let count = result.length;
  for (let i = 0; i < count; i++) {
    dd.push(drawOne(result));
  }
  let vv = [];
  let cc = Math.min(3, villagers.length);
  for (let i = 0; i < cc; i++) {
    vv.push(drawOne(villagers));
  }
  return [dd, vv];
}
