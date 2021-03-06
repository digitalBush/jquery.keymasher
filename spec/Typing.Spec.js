describe("Typing Specifications", function() {
	var input,events;

	beforeEach(function(){
		events=[];
		input =
			$("<input />")
			.bind("keydown keypress keyup",function(e){events.push(e)})
			.appendTo("body");
	});

    afterEach(function(){
        input.remove();
    });

    describe("when entering a carriage return character", function() {
        var textarea;
        beforeEach(function(){
            textarea =
                $("<textarea />")
                .bind("keydown keypress keyup",function(e){events.push(e)})
                .appendTo("body");

            textarea.mashKeys('\r');
        });

        afterEach(function(){
            textarea.remove();
        });

        it('should translate \\r to \\n', function(){
            expect(textarea.val()).toBe('\n');
        });
    });

    describe("when calling mashKeys with a string",function(){
		beforeEach(function(){
			 input.mashKeys('a');
		});

		it("should create a function and call type on it", function(){
			expect(input).toHaveValue('a');
		});
	});

	describe("when calling mashKeys with a string on a readonly input",function(){
		beforeEach(function(){
			input.prop("readonly",true).mashKeys('a');
		});

		it("should create a function and call type on it", function(){	
			expect(input).toHaveValue('');
		});
	});

    describe("when typing a lower cased alpha character", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){keys.type('a')});
		});

		it("should produce the correct input value", function(){
			expect(input).toHaveValue('a');
		});

		it("should trigger the correct number of events",function(){
			expect(events.length).toEqual(3);
		});

		it("should trigger correct keydown",function(){
			expect(events[0]).toMatchPropertiesOf({type:'keydown',keyCode:65});
		});

		it("should trigger correct keypress",function(){
			expect(events[1]).toMatchPropertiesOf({type:'keypress',charCode:97});
		});

		it("should trigger correct keyup",function(){
			expect(events[2]).toMatchPropertiesOf({type:'keyup',keyCode:65});
		});
	});

	describe("when typing a number", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){keys.type('1')});
		});

		it("should produce the correct input value", function(){
			expect(input).toHaveValue('1');
		});

		it("should trigger the correct number of events",function(){
			expect(events.length).toEqual(3);
		});

		it("should trigger correct keydown",function(){
			expect(events[0]).toMatchPropertiesOf({type:'keydown',keyCode:49});
		});

		it("should trigger correct keypress",function(){
			expect(events[1]).toMatchPropertiesOf({type:'keypress',charCode:49});
		});

		it("should trigger correct keyup",function(){
			expect(events[2]).toMatchPropertiesOf({type:'keyup',keyCode:49});
		});
	});

	describe("when typing a symbol", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){keys.type('!')});
		});

		it("should produce the correct input value", function(){
			expect(input).toHaveValue('!');
		});

		it("should trigger the correct number of events",function(){
			expect(events.length).toEqual(5);
		});

		it("should trigger shift keydown",function(){
			expect(events[0]).toMatchPropertiesOf({type:'keydown',keyCode:16});
		});

		it("should trigger correct keydown",function(){
			expect(events[1]).toMatchPropertiesOf({type:'keydown',keyCode:49});
		});

		it("should trigger correct keypress",function(){
			expect(events[2]).toMatchPropertiesOf({type:'keypress',charCode:33});
		});

		it("should trigger correct keyup",function(){
			expect(events[3]).toMatchPropertiesOf({type:'keyup',keyCode:49});
		});

		it("should trigger shift keyup",function(){
			expect(events[4]).toMatchPropertiesOf({type:'keyup',keyCode:16});
		});
	});

	describe("when typing a nonprinting character", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){
				keys.type(keys.backspace)
			 });
		});

		it("should produce not change the input value", function(){
			expect(input).toHaveValue('');
		});

		it("should trigger the correct number of events",function(){
			expect(events.length).toEqual(2);
		});

		it("should trigger keydown",function(){
			expect(events[0]).toMatchPropertiesOf({type:'keydown',keyCode:8});
		});


		it("should trigger keyup",function(){
			expect(events[1]).toMatchPropertiesOf({type:'keyup',keyCode:8});
		});
	});
});
