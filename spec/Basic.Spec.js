describe("Basic Specifications", function() {
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
    describe("when calling mashKeys with a string",function(){
		beforeEach(function(){
			 input.mashKeys('a');
		});
		
		it("should create a function and call type on it", function(){	
			expect(input).toHaveValue('a');           
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
	
	describe("when holding shift", function(){
		describe("and typing a lower cased alpha character", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('shift','a')});
			});
			
			it("should produce the correct input value", function(){	
				expect(input).toHaveValue('A');           
			});
			
			it("should trigger the correct number of events",function(){
				expect(events.length).toEqual(5);
			});
			
			it("should trigger shift keydown",function(){
				expect(events[0]).toMatchPropertiesOf({type:'keydown',keyCode:16});
			});
			
			it("should trigger correct keydown",function(){
				expect(events[1]).toMatchPropertiesOf({type:'keydown',keyCode:65});
			});
			
			it("should trigger correct keypress",function(){
				expect(events[2]).toMatchPropertiesOf({type:'keypress',charCode:65});
			});
			
			it("should trigger correct keyup",function(){
				expect(events[3]).toMatchPropertiesOf({type:'keyup',keyCode:65});
			});	
			
			it("should trigger shift keyup",function(){
				expect(events[4]).toMatchPropertiesOf({type:'keyup',keyCode:16});
			});
		});
		
		describe("and typing an upper cased alpha character", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('shift','A')});
			});
			
			it("should produce the correct input value", function(){	
				expect(input).toHaveValue('a');           
			});
			
			it("should trigger the correct number of events",function(){
				expect(events.length).toEqual(5);
			});
			
			it("should trigger shift keydown",function(){
				expect(events[0]).toMatchPropertiesOf({type:'keydown',keyCode:16});
			});
			
			it("should trigger correct keydown",function(){
				expect(events[1]).toMatchPropertiesOf({type:'keydown',keyCode:65});
			});
			
			it("should trigger correct keypress",function(){
				expect(events[2]).toMatchPropertiesOf({type:'keypress',charCode:97});
			});
			
			it("should trigger correct keyup",function(){
				expect(events[3]).toMatchPropertiesOf({type:'keyup',keyCode:65});
			});	
			
			it("should trigger shift keyup",function(){
				expect(events[4]).toMatchPropertiesOf({type:'keyup',keyCode:16});
			});			
		});
		
		describe("and typing a number", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('shift','1')});
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
	});
});