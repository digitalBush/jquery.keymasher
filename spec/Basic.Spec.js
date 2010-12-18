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
	
    describe("when typing an alpha character", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){keys.type('a')});
		});
		
		it("should have the correct value", function(){	
			expect(input).toHaveValue('a');           
		});
		
		it("should trigger the correct event stream",function(){
			expect(events).toMatchPropertiesOfEachInSequence([
				{type:'keydown',keyCode:65},
				{type:'keypress',charCode:97},
				{type:'keyup',keyCode:65}
			]);
		});
	});
	
	describe("when typing a number", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){keys.type('1')});
		});
		
		it("should have the correct value", function(){	
			expect(input).toHaveValue('1');           
		});
		
		it("should trigger the correct event stream",function(){
			expect(events).toMatchPropertiesOfEachInSequence([
				{type:'keydown',keyCode:49},
				{type:'keypress',charCode:49},
				{type:'keyup',keyCode:49}
			]);
		});
	});
	
	describe("when typing a symbol", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){keys.type('!')});
		});
		
		it("should have the correct value", function(){	
			expect(input).toHaveValue('!');           
		});
		
		it("should trigger the correct event stream",function(){
			expect(events).toMatchPropertiesOfEachInSequence([
				{type:'keydown',keyCode:16},
				{type:'keydown',keyCode:49},
				{type:'keypress',charCode:33},
				{type:'keyup',keyCode:49},
				{type:'keyup',keyCode:16}
			]);
		});
	});
	
	describe("when holding shift", function(){
		describe("and typing lower case alpha", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('shift','a')});
			});
			
			it("should have the correct value", function(){
				expect(input).toHaveValue('A');            
			});
			
			it("should trigger the correct event stream",function(){
			expect(events).toMatchPropertiesOfEachInSequence([
				{type:'keydown',keyCode:16},
				{type:'keydown',keyCode:65,shift:true},
				{type:'keypress',charCode:65,shift:true},
				{type:'keyup',keyCode:65,shift:true},
				{type:'keyup',keyCode:16}
			]);
		});
		});
		
		describe("and typing upper case alpha", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('shift','A')});
			});
			
			it(
			
			"should have the correct value", function(){
				expect(input).toHaveValue('a');            
			});
			
			it("should trigger the correct event stream",function(){
				expect(events).toMatchPropertiesOfEachInSequence([
					{type:'keydown',keyCode:16},
					{type:'keydown',keyCode:65,shift:true},
					{type:'keypress',charCode:97,shift:true},
					{type:'keyup',keyCode:65,shift:true},
					{type:'keyup',keyCode:16}
				]);
			});
		});
		
		describe("and typing numeric", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('shift','1')});
			});
			
			it("should have the correct value", function(){
				expect(input).toHaveValue('!');            
			});
			
			it("should trigger the correct event stream",function(){
				expect(events).toMatchPropertiesOfEachInSequence([
					{type:'keydown',keyCode:16},
					{type:'keydown',keyCode:49,shift:true},
					{type:'keypress',charCode:33,shift:true},
					{type:'keyup',keyCode:49,shift:true},
					{type:'keyup',keyCode:16}
				]);
			});
		});
	});
});