# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
            #attr builds attributes we need on initializtion. 
            attr_accessor :bike, :model, :wheels, :current_speed
            # bike model Trek has to exist
            # bike has to have 2 wheels and a current speed of zero
            def initialize(bike)
                @bike = bike
                @model = 'Trek'
                @wheels = 2
                @current_speed = 0
            end
            #tricycle needs an additional wheel
            def tricycle
                @wheels = 3
            end 
            # once you input speed, speed should to current_speed attribute which is 0 on init
            def pedal_faster(speed)
                @current_speed += speed
            end
            # once you input speed, speed should decrease from current_speed by given amount
            def brake(speed)
                @current_speed = [0, @current_speed - speed].max
            end
            # once you call method it returns model type, how many wheels, and its speed.
            def bike_info
                "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
            end
            

end