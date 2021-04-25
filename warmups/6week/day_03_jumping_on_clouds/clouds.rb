# There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.
# For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.
# Example 

# Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .
# Function Description
# Complete the jumpingOnClouds function in the editor below.
# jumpingOnClouds has the following parameter(s):
# int c[n]: an array of binary integers
# Returns
# int: the minimum number of jumps required

def jumping_on_clouds arr
    jump_count = 1
    jump_arr = arr.dup
    jump_arr[0] = 'J'
    jump_arr[-1] = 'E'
    p jump_arr

    jump_arr.map.with_index do |cloud, i|
        # p cloud_next1 = jump_arr[i + 1]
        # p cloud_next2 = jump_arr[i + 2]
        if cloud == 'J'
            if jump_arr[i + 2] == 0 
                jump_arr[i + 2] = 'J'
                jump_count += 1
            elsif jump_arr[i + 1] == 0 && jump_arr[i + 2] == 1
                jump_arr[i + 1] = 'J'
                jump_count += 1
            end
        end
        break if jump_arr[i + 2] == 'E'
    end
    p jump_arr
    p jump_count
end

# jumping_on_clouds [0, 1, 0, 0, 0, 1, 0]
# jumping_on_clouds [0, 0, 0, 0, 1, 0]
# jumping_on_clouds [0, 0, 1, 0, 0, 1, 0]
# jumping_on_clouds [0, 0]
jumping_on_clouds [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]

