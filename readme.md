questions 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
1 Answer: getElementById দিয়ে আমরা একটা নির্দিষ্ট আইডিকে ধরতে পারে, getElementsByClassName দিয়ে আমরা আলাদা আলাদা জায়গায় লেখা একই ধরনের ক্লাস একসাথে ধরতে পারি যা আমরা এই এসাইনমেন্টে করেছি, querySelector হচ্ছে CSS এর মত করে ক্লাস লিখতে হয় যদি HTML এর মধ্যে একই নামের অনেকগুলো ক্লাস থাকে তাহলে শুধু প্রথম টিকে এটা ধরতে পারবে, querySelectorAll এটাও querySelector এর মতই তবে querySelectorAll HTML এর মধ্যে একই নামের অনেকগুলো ক্লাস থাকে তাহলে সবগুলোকে একসাথে ধরতে পারে।


questions 2. How do you **create and insert a new element into the DOM**?
2 Answer: প্রথমে একটা নতুন এলিমেন্ট তৈরি করার জন্য document.CreateElement(" ") লিখে ব্রাকেটের ভিতরে যেই এলিমেন্ট টি তৈরি করা হবে ওই এলিমেন্টের নাম দিলে একটি নতুন এলিমেন্ট তৈরি হয়ে যাবে, এরপর DOM এ ঢোকানোর জন্য প্রথমে আমরা DOM থেকে একটি নির্দিষ্ট সেকশন বেছে নিব তারপরে সেই সেকশনকে স্ক্রিপ বা একটি Java script file এর ভিতরে আনতে হবে আনার পর আমরা যে নতুন এলিমেন্ট তৈরি করেছি ওইটাকে তার appendChild করে দিলেই DOM এর ভিতরে সেটি ঢুকে যাবে।


questions 3. What is **Event Bubbling** and how does it work?
3 Answer: event Bubbling হচ্ছে যখন কোন ইউজার একটি বাটনে ক্লিক বা এমন কিছু করে যা দ্বারা event তৈরি হয়, প্রথমে ওই ইভেন্টে ডকুমেন্ট থেকে যেখানে ইউজার ক্লিক করেছে ওইখানে পৌঁছায় তারপর ইউজারকে আউটপুট দেওয়ার জন্য Bubbling এর মাধ্যমে উপরে উঠে আসে এবং ইউজারকে আউটপুট দেখায়, Bubbling বলতে বুঝায় উপরে উঠা।


questions 4. What is **Event Delegation** in JavaScript? Why is it useful?
4 Answer: যেমন একটি প্যারেন্ট এলিমেন্ট এর ভিতরে পাঁচটি চাইল্ড এলিমেন্ট আছে এখন প্রত্যেকটিতে addEventListener না বসিয়ে তাদের প্যারেন্ট এলিমেন্ট addEventListener বসিয়ে দিলে এখন কোন চাইল্ড এলিমেন্ট কে ক্লিক করলে Bubbling এর মাধ্যমে প্যারেন্ট এলিমেন্ট এর কাছে পৌঁছাবে যার কারণে কেউ ক্লিক করেছে কিনা তা সহজে বুঝা যায়, এটাকে মূলত event Delegation বলে,


questions 5. What is the difference between **preventDefault() and stopPropagation()** methods?
5 Answer: preventDefault() ইভেন্ট এর ডিফল্ট বিহেভিয়ার বন্ধ করার জন্য এটি ব্যবহৃত হয়, যেমন আমরা কিছুদিন আগে শিখেছি from submit হলে page রিলোড হয় এটাকে যদি আমরা আটকাতে চাই তাহলে preventDefault() লিখলে এটা বন্ধ হয়ে যাবে, stopPropagation() এটা দ্বারা event এর Bubbling বন্ধ করা যায়,