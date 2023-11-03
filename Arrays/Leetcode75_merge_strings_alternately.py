class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """

        # Initialize an empty string to store the merged result
        merge_string = ""

        # Determine the lengths of the input words
        len1 = len(word1)
        len2 = len(word2)

        # Variables to store remaining characters from longer word
        append_word = ""

        # Compare the lengths of the input words
        if len1 > len2:
            # If word1 is longer, set merge_length to len2 and store the remaining characters from word1
            merge_length = len2
            append_word = word1[len2:]
        elif len2 > len1:
            # If word2 is longer, set merge_length to len1 and store the remaining characters from word2
            merge_length = len1
            append_word = word2[len1:]
        else:
            # If both words are of equal length, set merge_length to len1
            merge_length = len1

        # Iterate over the range from 0 to merge_length - 1
        # Concatenate characters from word1 and word2 alternately to merge_string
        for i in range(merge_length):
            merge_string += word1[i] + word2[i]

        # Concatenate the remaining characters (append_word) to merge_string
        merge_string += append_word

        # Return the final merged string
        return merge_string
