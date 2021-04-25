
# def staircase number
#     (1..number).to_a.each do |num|
#         puts " " * (number - num) + "#" * num
#     end

# end

# staircase 6

def rotate array, num
    # num.times {
    #     deleted_num = array.shift
    #     array << deleted_num
    # }
    # p array
    p array.rotate(4)
end

rotate [1, 2, 3, 4, 5], 4