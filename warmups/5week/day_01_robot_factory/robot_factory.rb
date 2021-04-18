# # # Robot Factory 🤖

# # You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up.

# # The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.

# # Names typically take the format of things like "BX777" or "SD234".

# # For instance:
# # ```rb
# # robot1 = Robot.new

# # puts robot1.name
# # => "BX777"

# # robot2 = Robot.new

# # puts robot2.name
# # => "SD234"

# # puts robot2.name
# # => "SD234"
# # ```

# # Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.

# # if I say:
# # ```rb
# # robot3 = Robot.new

# # puts robot3.name
# # => "RF629"

# # robot3.reset

# # puts robot3.name
# # => "ZC532"
# # ```
# # ## Extensions 🧯

# # ### Counters 🔢
# # It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away.

# # For every action our robot takes, we should keep track of it.

# # ```rb
# # robot3 = Robot.new
# # puts robot3.name
# # puts robot3.name

# # robot3.reset
# # puts robot3.name
# # puts robot3.name

# # puts robot3.instruction_count
# # => 5
# # ```

# # ### Robot Time ⌚️
# # Number of instructions is important, but so is the total age of the robot.
# # ```rb
# # robot3 = Robot.new
# # puts robot3.timers
# # => "21 seconds since last boot, 21 seconds since creation"

# # robot3.reset
# # puts robot3.timers
# # => "8 seconds since last boot, 29 seconds since creation"
# # ```


require 'pry'



class Robot
    # attr_reader :instruction_count

    def initialize
        @name = random_name
        @instruction_count = 0
        @created_at = Time.now.to_i
        @reset_at = Time.now.to_i
    end

    def name
        @instruction_count += 1
        puts "My name is #{@name}"
    end

    def random_name
        letters = ('AA'..'ZZ').to_a.sample()
        digits = ('000'..'999').to_a.sample()
        random_name = letters + digits
    end

    def instruction_count
        puts "Instruction count: #{@instruction_count}"
    end

    def reset 
        @name = random_name
        @instruction_count += 1
        @reset_at = Time.now.to_i
    end

    def timers
        @instruction_count += 1

        @reset_time = Time.now.to_i - @reset_at
        @create_time = Time.now.to_i - @created_at
        
        @message = "#{@reset_time} seconds since last boot, #{@create_time} seconds since creation"
        
    end
end

robot1 = Robot.new

puts robot1.name

robot1.reset

puts robot1.name

robot3 = Robot.new
puts robot3.name
puts robot3.name
puts robot3.instruction_count

robot3.reset
puts robot3.name
puts robot3.name

puts robot3.instruction_count
# => 5


robot4 = Robot.new
puts 'ROBOT4'
puts robot4.timers
# => "21 seconds since last boot, 21 seconds since creation"

robot4.reset
puts robot4.timers
# => "8 seconds since last boot, 29 seconds since creation"

binding.pry

# require 'pry'
# class Robot

#   attr_reader :counter # this line is here to let access to the @counter variable

#   def initialize
#     @name = generate_name
#     @counter = 0
#     @created_at = Time.now.to_i
#     @reset_at = Time.now.to_i
#   end

#   def generate_name
#     letters = ("AA".."ZZ").to_a.sample
#     digits = ("000".."999").to_a.sample
#     name = letters.concat(digits)
#   end

#   def get_name
#     @counter += 1
#     puts "My name is: #{@name}"
#   end

#   def reset
#     @counter += 1
#     @reset_at = Time.now.to_i
#     @name = generate_name
#   end

#   def timers
#     puts "#{Time.now.to_i - @reset_at} seconds since last reset, and #{Time.now.to_i - @created_at} seconds since creation"
#   end

# end

# binding.pry

# class Food
#     def initialize(protein)
#       @protein = protein
#     end
#   end
#   bacon = Food.new(21)
#   bacon.protein