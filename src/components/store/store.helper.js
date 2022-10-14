function filterSearch(items, filter) {
    return items.products.filter(item => filter ? item.title.toLowerCase().includes(filter.toLowerCase()) : item)
}


module.exports = filterSearch;