class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """

        merge_string = ""
        len1 = len(word1)
        len2 = len(word2)
        append_word = ""
        if len1 > len2:
            merge_length = len2
            append_word = word1[len2:len1]
        elif len2 > len1:
            merge_length = len1
            append_word = word2[len1:len2]
        else:
            merge_length = len1

        for i in range(merge_length):
            merge_string = merge_string + word1[i] + word2[i]

        merge_string = merge_string + append_word
        return merge_string
        
        