

const filterSearch = require('./store.helper');

test('search should not be case sensitive', () => {
    const mockArray = { products: [{ title: "Gucci" }, { title: "GUCCI" }, { title: "gucci" }]}
    expect(filterSearch(mockArray, "gucci").length).toBe(3);
});


test('search should return items even if name not fully written', () => {
    const mockArray = { products: [{ title: "Gucci" }, { title: "GUCCI" }, { title: "gucci" }] }
    expect(filterSearch(mockArray, "gu").length).toBe(3);
});


test('search should return correct items', () => {
    const mockArray = { products: [{ title: "Gucci" }, { title: "prada" }, { title: "gucci" }] }
    expect(filterSearch(mockArray, "prada").length).toBe(1);
});


test('search should should not filter if nothing is in the search bar ', () => {
    const mockArray = { products: [{ title: "Gucci" }, { title: "prada" }, { title: "gucci" }] }
    expect(filterSearch(mockArray, "").length).toBe(3);
});


test('search should return nothing if product not there', () => {
    const mockArray = { products: [{ title: "Gucci" }, { title: "GUCCI" }, { title: "gucci" }] }
    expect(filterSearch(mockArray, "prada").length).toBe(0);
});