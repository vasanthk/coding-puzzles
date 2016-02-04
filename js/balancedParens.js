/**
 Given an expression string exp, write a program to examine whether the pairs and the orders of

 "{","}","(",")","[","]"
 are correct in exp.

 For example, the program should print true for

 exp = "[()]{}{[()()]()}"
 and false for

 exp = "[(])"

 Reference:
 http://codereview.stackexchange.com/questions/45991/balanced-parentheses
 */

// Complexity:
// Time complexity: O(n) where n is length of the string
// Space complexity: O(n/2) where n is length of string

function parenthesesAreBalanced(str) {
  var parentheses = "[]{}()";
  var stack = []; //Parentheses stack
  var char; //Character in the string
  var bracePosition;
  var braceType;

  for (var i = 0; char = str[i]; i++) {
    bracePosition = parentheses.indexOf(char);

    if (bracePosition === -1) {
      continue;
    }

    braceType = bracePosition % 2 ? 'closed' : 'open';

    if (braceType === 'closed') {
      //If there is no open parentheses at all, return false OR
      //if the opening parentheses does not match ( they should be neighbours )
      if (!stack.length || parentheses.indexOf(stack.pop()) != bracePosition - 1) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  //If anything is left on the stack <- not balanced
  return stack.length === 0;
}

// OUTPUT:
// parenthesesAreBalanced('(2*3 + {3})')
// true