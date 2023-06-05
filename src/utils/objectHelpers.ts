// ?? Данная функция принимает массив объектов items, идентификатор объекта itemId, имя свойства objPropName, которое нужно обновить, и набор новых свойств newObjProps;
// ?? Функция обновляет объект в массиве, найденный по идентификатору itemId, путем создания нового объекта с помощью объединения исходного объекта и newObjProps.  Затем функция возвращает новый массив объектов с обновленным объектом;
// ** Типизация для универсальности функции. Экстендимся так, чтобы тип значения keyof K мог быть любым, но не вызывающим ошибку, ну и так же строкой;
export const updateObjectInArray = <T, K extends { [key: string]: any }>(items: K[], itemId: number, objPropName: keyof K & string, newObjProps: T): K[] => {
   return items.map((i: K) => {
      if (i[objPropName] === itemId) return { ...i, ...newObjProps }
      return i;
   })
}