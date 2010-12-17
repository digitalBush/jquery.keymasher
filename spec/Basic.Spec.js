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
			expect(input.val()).toEqual('a');           
		});
	});
	
    describe("when typing an alpha character", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){keys.type('a')});
		});
		
		it("should have the correct value", function(){	
			expect(input.val()).toEqual('a');           
		});
		
		//TODO: test event stream
	});
	
	describe("when typing a number", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){keys.type('1')});
		});
		
		it("should have the correct value", function(){	
			expect(input.val()).toEqual('1');           
		});
		
		//TODO: test event stream
	});
	
	describe("when typing a symbol", function(){
		beforeEach(function(){
			 input.mashKeys(function(keys){keys.type('!')});
		});
		
		it("should have the correct value", function(){	
			expect(input.val()).toEqual('!');           
		});
		
		//TODO: test event stream
	});
	
	describe("when holding shift", function(){
		describe("and typing lower case alpha", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('shift','a')});
			});
			
			it("should have the correct value", function(){
				expect(input.val()).toEqual('A');            
			});
			
			//TODO: test event stream
		});
		
		describe("and typing upper case alpha", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('shift','A')});
			});
			
			it("should have the correct value", function(){
				expect(input.val()).toEqual('a');            
			});
			
			//TODO: test event stream
		});
		
		describe("and typing numeric", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('shift','1')});
			});
			
			it("should have the correct value", function(){
				expect(input.val()).toEqual('!');            
			});
			
			//TODO: test event stream
		});
	});
});