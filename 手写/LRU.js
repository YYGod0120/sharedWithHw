class LRU {
  constructor(count) {
    this.count = count;
    this.data = new Map();
  }
  set(key, data) {
    this.data.set(key, data);
    if (this.data.size > this.count) {
      let oldKey = this.data.keys().next().value;
      this.data.delete(oldKey);
    }
  }
  get(key) {
    if (this.data.has(key)) {
      let value = this.data.get(key);
      this.data.delete(key);
      this.data.set(key, value);
      return value;
    }
    return undefined;
  }
}

var lruCache = new LRU(2);

lruCache.set("name", "test");
lruCache.set("age", 10);
console.log(lruCache.get("name"));
lruCache.set("name", "男");
lruCache.set("height", 180);
lruCache.set("weight", "120");
console.log(lruCache.data);
