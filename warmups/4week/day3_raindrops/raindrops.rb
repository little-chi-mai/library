# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.

# def raindrops(number)

#     output = ''
#     if number % 3 == 0
#         output += 'Pling'
#     end
#     output += 'Plang' if number % 5 == 0
#     output += 'Plong' if number % 7 == 0

#     # if output.empty?
#     #     return number
#     # end
#     return number if output.empty?

#     output
    
# end



def raindrops number
   
    raindrops_str = ""

    # factor of 3
    raindrops_str += "Pling" if number % 3 == 0
    # factor of 5
    raindrops_str += "Plang" if number % 5 == 0
    # factor of 7
    raindrops_str += "Plong" if number % 7 == 0

    # print numbers with no factors
    if raindrops_str == ''
        raindrops_str = number.to_s
    end

    raindrops_str
end


# puts "input 6: #{raindrops(6)}"
# puts "input 10: #{raindrops(10)}"
# puts "input 28: #{raindrops(28)}"
# puts "input 34: #{raindrops(34)}"
# puts "input 105: #{raindrops(105)}"


  
  def menu
    puts "|//\\|" * 10
    puts "RAINDROPS".center(50)
    puts ">><<" * 12
    print "[Enter] to play, [q] to quit: "
  end
  
  menu
  user_choice = gets[0].downcase
  
  until user_choice == 'q'
    print "Choose a number: "
    user_num = gets.to_i
    puts raindrops(user_num)
  
    menu
    user_choice = gets[0].downcase
  end
  
  puts "Thanks for playing"
  
