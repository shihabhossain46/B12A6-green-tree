1) What is the difference between var, let, and const?

var:পুনরায় ঘোষণা ও মান পরিবর্তন করা যায়।

let:মান পরিবর্তন করা যায়, কিন্তু পুনরায় ঘোষণা করা যায় না।

const: মান ও ঘোষণা অপরিবর্তনীয়।

2) What is the difference between map(), forEach(), and filter()?

forEach(): প্রতিটি উপাদানে ফাংশন প্রয়োগ করে, কিছু ফেরত দেয় না।

map(): প্রতিটি উপাদানে ফাংশন প্রয়োগ করে নতুন অ্যারে ফেরত দেয়।

filter(): শর্ত অনুযায়ী উপাদান বাছাই করে নতুন অ্যারে ফেরত দেয়।

3) What are arrow functions in ES6?

Arrow function হলো সংক্ষিপ্ত ফাংশন লেখার পদ্ধতি, যেখানে function কীওয়ার্ডের পরিবর্তে => ব্যবহার করা হয়। এটি this কনটেক্সট ধরে রাখে।

4) How does destructuring assignment work in ES6?

Destructuring assignment দিয়ে অ্যারে বা অবজেক্ট থেকে মান বের করে আলাদা ভেরিয়েবলে রাখা যায়। উদাহরণ:

const [a, b] = [1, 2];
const {name, age} = person;

5) Explain template literals in ES6. How are they different from string concatenation?

Template literals ব্যাকটিক (``) দিয়ে লেখা হয় এবং ${} এর মাধ্যমে ভেরিয়েবল বা এক্সপ্রেশন যুক্ত করা যায়। এটি মাল্টি-লাইন স্ট্রিং ও সহজ ইন্টারপোলেশন সমর্থন করে।
