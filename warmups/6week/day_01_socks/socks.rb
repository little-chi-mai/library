# There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
# Example 
 

# There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
# Function Description
# Complete the sockMerchant function in the editor below.
# sockMerchant has the following parameter(s):
# int n: the number of socks in the pile
# int ar[n]: the colors of each sock
# Returns
# int: the number of pairs

def pairs_of_socks array
    socks_count = {}
    pairs_count = {}

    array.each do |color|
        if socks_count.keys.include? color
            socks_count[color] += 1
        else
            socks_count[color] = 1
        end
    end

    p socks_count

    socks_count.map do |k, v|
        if v % 2 == 0
            pairs_count[k] = v/2 
        else
            pairs_count[k] = (v - 1)/2 
        end
    end

    p pairs_count

    p result = pairs_count.values.sum
    # p "The total numbers of pairs is #{result}"
end

pairs_of_socks [1, 2, 3, 1, 2, 1, 3, 2]