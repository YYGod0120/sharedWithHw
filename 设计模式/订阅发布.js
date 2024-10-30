class PubSub {
  constructor() {
    // 消息类型
    this.messages = {};
    // 订阅者
    this.listeners = {};
  }
  //添加消息
  publish(type, content) {
    if (!this.messages[type]) {
      this.messages[type] = [];
    }
    this.messages[type].push(content);
  }
  subscribe(type, person) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(person);
  }
  notify(type) {
    const message = this.messages[type];
    const person = this.listeners[type] || [];
    message.forEach((mes) => {
      person.forEach((item) => {
        item.cb(mes);
      });
    });
  }
}

class Publisher {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }
  publish(type, content) {
    this.context.publish(type, content);
  }
}

class Subscriber {
  constructor(name, context, cb) {
    this.name = name;
    this.context = context;
    this.cb = cb;
  }
  subscribe(type, person) {
    this.context.subscribe(type, person);
  }
}
const TYPE_A = "music";
const TYPE_B = "movie";
const TYPE_C = "novel";

const pubsub = new PubSub();

const publisherA = new Publisher("publisherA", pubsub);
publisherA.publish(TYPE_A, "we are young");
publisherA.publish(TYPE_B, "the silicon valley");
const publisherB = new Publisher("publisherB", pubsub);
publisherB.publish(TYPE_A, "stronger");
const publisherC = new Publisher("publisherC", pubsub);
publisherC.publish(TYPE_C, "a brief history of time");

const subscriberA = new Subscriber("subscriberA", pubsub, (res) => {
  console.log("subscriberA received", res);
});
subscriberA.subscribe(TYPE_A, subscriberA);
const subscriberB = new Subscriber("subscriberB", pubsub, (res) => {
  console.log("subscriberB received", res);
});
subscriberB.subscribe(TYPE_C, subscriberB);
const subscriberC = new Subscriber("subscriberC", pubsub, (res) => {
  console.log("subscriberC received", res);
});
subscriberC.subscribe(TYPE_B, subscriberC);

pubsub.notify(TYPE_A);
pubsub.notify(TYPE_B);
pubsub.notify(TYPE_C);
