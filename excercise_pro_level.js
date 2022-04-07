
// //####################################################
// 1. Longest String in an Array
// Prompt
// Write a function that accepts an array of strings.Return the longest string.
//     Approach
// What is our Input ?
//     String[] = an array of strings

// What is our Output ?
//     String = the longest of the strings in the array

// Questions to ask the interviewer:
// Do we need to consider if there are no strings in the array ?
//     For this challenge, no
// Do we need to consider times when all of the strings are the same length ?
//     Yes.Return the first string.

// Longest String Plan
// For this problem, we need to:
//     Initialize and Declare Variable for Longest String
//     Loop through the array
//     Find the length of each string
//     Determine if that length is the largest we have seen so far.
//     Replace the longest / largest variable with the arr[index] as long as length is greater than the variable.
//     Return longest / largest string.

//     Explanation
// There are two different ways listed here as a possible solution to this problem: one uses the ES5 Syntax and uses the ES6 Syntax.
//     In both solutions, we initially need to declare a longest variable and initialize it to an empty string.
//     In the ES5 solution, we are utilizing a traditional for loop structure to look at each index in the array.We are using the array method forEach to iterate over the array in the ES6 solution.
//     As we iterate through the data structure, we want to take a look at the length of each string.In JavaScript, we can do that with the length property.
//     In the ES5 solution, we utilized a conditional statement to see if the current(arr[i]) string’s length is longer than(but not equal to) the current longest string(longest).The ES6 solution takes another approach with using the Math object property max as a shortcut for the conditional logic in the ES5 version.
//     If the string is longer, we assign it to the longest variable we already created.
//     Return the longest as our function’s terminal statement in both cases.

//Your code here:
function traveChuoidainhat(a = [])
{
    var Mangtam = a[0];
    var Mangtamdodai = a[0].length;
    for(var i = 0; i < a.length; i++)
    {
       if(a[i].length > Mangtamdodai)
       {
           Mangtamdodai = a[i].length;
           Mangtam = a[i];
       }
    }
    return Mangtam;
}



// //####################################################
// 2. Most Commonly Used Character in String
// Prompt
// Write a function that takes a string, and returns the character that is most commonly used in the string.
//     Approach
// What is our Input ?
//     String = one String

// What is Our Output ?
//     String = the single character that shows up the most in the given string

// Questions to ask the interviewer:
// Do we need to consider if there is no string given ?
//     For this challenge, no
// Do we need to consider times when more than one character shows up the same number of times ?
//     No.Return the last one.

// Most Used Char Plan
// To find the character most often used in a string, we need to be able to count how many of each kind we have.We can do this using an object that has key:value pairs.
//     Define and Initialize an object
//     Map character count to that object.
//     Loop through the object to find the max count.
//     Assign new max count value to maxCharCount and new max key to maxChar.
//     Return maxChar
// Explanation
//     Create a charCount object.This object can be named whatever you’d like as long as it’s consistent.
//     Use a standard for loop to iterate through the string, and check to see if it exists in the charCount object.If it does, add 1 to CharCount[key] and reassign it to the same variable.The pipes here will cover any instance where the key does not yet exist in the object and initialize the count to 1.
//     Loop through the object using a for...in loop.This type of loop allows us to iterate over each property in an object to look at its value.In this instance we want to find the largest number.
//     The wording for this problem indicates that they want us to find the last max number(in the case there is more than one character with the same amount of appearances), so we use >= to reassign the maxChar if needed.
//     Return our maxChar.

//Your code here:
function commoncharacter(GivenString = [])
{
   const ob = {};
   var count = 0;
   var commonchar = "";
   for( var i of GivenString)
   {
       ob[i] = ob[i] + 1 || 1;
   }

   for(var j in ob)
   {
       if(ob[j] > count)
       {
           count = ob[j];
           commonchar = j;
       }
   }
    return commonchar;
   
}



// //####################################################
// 3. Two Strings Are Anagrams of Each Other
// Prompt
// Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.
//     Approach
// What is our Input ?
//     String, String = two Strings

// What is Our Output ?
//     Boolean are either true or false.True if they are anagrams of each other, and false if they are not.

// Questions to ask the interviewer:
// What is an anagram ?
//     An anagram is another word or phrase formed by rearranging letters of the first word or phrase.
// Do we need to consider whitespace ?
//     Trim whitespace prior to comparison.

// Anagrams Plan
// If an anagram is just a bunch of letters jumbled around, we can see if the strings are anagrams of each other by:
//     Comparing the length: if they are not same length, they are not an anagram of the other
//     Sorting the string and using an equality operator to see if it’s equal.

//     Explanation
//     Compare the length of the first string to the length of the second string.If they are not equal, return false.
//     If the strings pass the initial check, we sort each individual string, assign it to a variable, and then return the result of setting the variables equal to each other.If they are equal, it will return true.If not, it will return false.
// This particular solution considers white space by sorting it to the end of the string, so it doesn’t necessarily matter if it’s counted or not.

//Your code here:
function KiemtraAnagram(ch1, ch2)
{
    var mch1 = ch1.split("");
    var mch2 = ch2.split("");
    var ketqua = (mch1.sort().toString().localeCompare(mch2.sort().toString()) == 0) ? true : false; 
    return ketqua;
}



// //####################################################
// 4. String Permutation is Palindrome ?
//     Prompt
// Given a string, write a function that will return whether or not that string is a palindrome.
//     Approach
// What is our Input ?
//     String = one String

// What is our Output ?
//     Boolean means either true or false.true if string is a palindrome; false if it is not.

// Questions to ask the interviewer:
// Do we need to consider whitespace ?
//     Do not trim whitespace.
// Does the palindrome need to be in the dictionary ?
//     No, it does not.

// Palindromes Plan
//     Reverse the string.We need to keep the old reference to the string to use later.To do this, we need to split string into an array.
//     Reverse the string.
//     Join the string.
//     See if new variation of string is equal to an old variation of string.
//     Explanation
// This one is deceptively simple.You just need to have knowledge of array methods and how to work with strings in conjunction with those methods.Practice how this could possibly be done without the methods so you know how these methods work under the hood.
// Keep the learning going.
// Learn JavaScript without scrubbing through videos or documentation.Educative’s text - based courses are easy to skim and feature live coding environments, making learning quick and efficient.

//Your code here:





// //####################################################
// 5. The Complete Guide to Modern JavaScript
// Balanced Brackets
// Prompt
// Given a string possibly containing three types of braces({"abac"}, ["abc"], ("abcd")), write a function that returns a Boolean indicating whether the given string contains a valid nesting of braces.
//     Approach
// What is our Input ?
//     String = one String

// What is our Output ?
//     Boolean means either true or false.true if string has balanced brackets; false if it does not.

// Questions to ask the interviewer:
// What do you mean by balanced brackets ?
//     A string is considered balanced if it has as many opening brackets of a given type as it has closing brackets of that same type.No bracket can be left unmatched.A closing bracket also cannot match a corresponding opening bracket that comes after it.Brackets also cannot overlap each other.
// Will the string only have brackets in it ?
//     No.All chars can be used.

// Balanced Brackets Plan
// Because we are looking for nested balanced brackets, we are looking to use a data structure to store the open brackets we have seen so far.
// As we come to a closing bracket, we need to look to see if the last bracket added to the data structure matches the opposite of the current bracket.
// If your data structure is empty by the time we get to the end of the string, we have balanced brackets.

//     Explanation
// The process for this particular problem is more about checking for failures.We use a data structure called a stack that takes a first in, last out approach to do that.
// When we come across an open bracket, we push it on to the stack.When we come across a closed one, we check to see if the last index of the stack is the opposite the current character.
// If the stack is empty by the time we get to the end of our logic, we have balanced brackets.

//Your code here:




// //####################################################
// 6. Armstrong Numbers
// Prompt
// An Armstrong number is an n - digit number that is equal to the sum of the nthnthnth powers of its digits.Determine if the input number is an Armstrong number.Return either true or false.
//     Approach
// What is our Input ?
//     Number = n - digit number

// What is our Output ?
//     Boolean means either true or false.true if number is Armstrong Number; false if it is not.

// Questions to ask the interviewer:
// May I have an example please ?
//     13 + 53 + 33=1531 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1531​3 + 5​3 + 3​3 = 153

// Armstrong Number Plan
// Remember that in JavaScript type coercion exists.When working with Numbers is JS, remember to check the typeof the number.If it is a string, you’ll need to plan for that.This is really important when working with math in JS.
//     Explanation
// To solve this problem, we change the number to a string, figure out the power by getting the length of the number, and then use a for loop to add up the individual numbers ^ length of the number passed in.
// We then check to see if the sum is equal to the original number.If it is, it is an Armstrong number.

//Your code here:




// //####################################################
// 7. Sorting Objects
// Prompt
// Given an array of objects, sort the objects by population size.Return the entire object.
//     Approach
// What is our Input ?
//     An array of objects

// What is Our Output ?
//     An array of objects, sorted by population

// SortObjects Plan
// JavaScript has a built -in array method called sort() that we can use for this particular exercise.
//     What’s interesting about this particular method is that in JavaScript, if you don’t use a callback compare function to sort the array of objects, the default sort method is used to sort by characters rather than number.For example:
// const sortNumbers = (arr) => {
//     return arr.sort();
// }
// console.log(sortNumbers([1, 11, 27, 2, 34, 123])); // [ 1, 11, 123, 2, 27, 34 ]
// We need to use a compare function as a callback passed into the sort method to make sure that the actual numbers are treated properly.
//     Explanation
// To sort an array of objects by a certain property, we have to use the compare function as a parameter in the built -in sort method in JavaScript.
// The compare function takes in two parameters: here they are named a and b.They represent two objects next to each other in our array.If a and b are both objects, we can use dot notation to access the property population.
// If we want to be sure that the array has objects sorted by population in increasing order, we evaluate a.population - b.population.If it’s - 1, it will put the list in decreasing order by population.The opposite would put it in increasing order.If the expression happens to evaluate to 0, it means that the two patterns are equal to the other.

//Your code here:




// //####################################################
// 8. Reverse a Linked List
// Prompt
// Create a Node class and a LinkedList class with these methods:
// insertFirst(data)
// insertLast(data)
// getFirst()
// getLast()

// Approach
// What is our Input ?
//     Nothing.We are building two classes from scratch that have methods.

// What is our Output ?
//     This is a class that will create instances of a LinkedList.We will use it to test the reverse a linked list functionality.

// Questions to Possibly Ask Interviewer
// Are we to assume this is a singly - linked list that actually exists ?
//     No.Handle all possible errors if you can.

// Reverse a Linked List Plan
// The first thing we need to investigate is how a linked list works.Once we have that figured out, it might be a lot easier to write out the code for it.
// Linked lists are different from arrays in that they don’t require a continuous place of residence in memory.Linked Lists can be broken up into single nodes if needed as long as the linked list’s next value is not null.
//     Let’s plan to initialize three variables: prev as NULL, curr as head, and next as NULL.Iterate trough the Linked List.In a while loop, do the following.
//     Store next node
// next = curr.next
//     Change next of current(this is where the reversing happens)
// curr.next = prev
// Explanation
// We start with the Node class. It will have a data property and a next property.The next property acts as a pointer that will direct us to the next node in our linked list if it exists, or null.
// For the Linked List class, we check for failures in our methods before we handle the success.With Linked Lists, we will check to see if the actual list exists by checking to see if the head exists and perform the appropriate logic for each method.
// When we reverse a linked list, juggling variables around is the rule of the day.We have one variable, node, that is declared and then initialized to head.We declare tmp and prev without initializing them.
// While the node exists, we redirect the pointers by reassigning variables.The result is a reversed linked list.

//Your code here:




// //####################################################
// 9. Remove Kth - Node from Linked List
// Prompt
// Using the Node and LinkedList classes that you created in the previous question, add methods to it so that, when given an kth - integer, you can delete that kthkthkth node from the linked list
// Approach
// What is our Input ?
//     We will add to the Linked List and Node classes that were written in the previous question.

// What is our Output ?
//     This is a class that will create instances of a LinkedList.We will use it to test delete a kthkthkth - node functionality.

// Questions to Possibly Ask Interviewer
// Is this a zero - based indexing ?
//     Yes.

// LinkedList Delete K - th Node Plan
// When given K we have to be able to delete that node in a linked list.To handle edge cases, we need to have some knowledge of the size of the list, the node prior to the Kth node and the node after the Kth node.We essentially need to redirect the pointers for those nodes to not include the one we want to be deleted.
// To do that, we’ll loop through the list, keep track of which node we’re on, and change the pointers to skip the Kth - node.It’ll still be in memory, ready to be written over, but it will be essentially deleted from our list.

//Your code here:




// //##################################
// 10. Circular Linked List
// Prompt
// Given a linked list, return true if the list is circular, false if it is not.
//     Approach
// What is our Input ?
//     A new LinkedList()

// What is our Output ?
//     A Boolean that tells us if the linked list is circular or not.
// Questions to Possibly Ask Interviewer
// What does it mean for a linked list to be circular ?
//     It means that a next node value could point to a node that we have already seen in our linked list.

// Reverse a Linked List Plan
// We will have two pointers: one slow and one fast.The fast one will move twice as much as the slow one on each iteration.If it comes to be that the fast.next.next value doesn’t exist, we can assume it’s a linear linked list.If the slow pointer and the fast pointer ultimately end up equal, we know we have a circular component to our list.
//     Explanation
// Here we declare and initialize two pointers, one slow and one fast, that are both pointed at the head.While the next two nodes exist, we’ll reassign the pointers: the slow will move to the next node and the fast will move two nodes.
// If the slow ever is the same value as the fast, we have a circular linked list.If ever one of the two nodes past the current node doesn’t exist, we’ll break the loop and return false.

//Your code here:



