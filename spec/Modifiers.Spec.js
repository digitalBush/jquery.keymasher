describe("Modifier Specifications", function() {
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
				expect(events[1]).toMatchPropertiesOf({type:'keydown',keyCode:65,shift:true});
			});
			
			it("should trigger correct keypress",function(){
				expect(events[2]).toMatchPropertiesOf({type:'keypress',charCode:65,shift:true});
			});
			
			it("should trigger correct keyup",function(){
				expect(events[3]).toMatchPropertiesOf({type:'keyup',keyCode:65,shift:true});
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
				expect(events[1]).toMatchPropertiesOf({type:'keydown',keyCode:65,shift:true});
			});
			
			it("should trigger correct keypress",function(){
				expect(events[2]).toMatchPropertiesOf({type:'keypress',charCode:97,shift:true});
			});
			
			it("should trigger correct keyup",function(){
				expect(events[3]).toMatchPropertiesOf({type:'keyup',keyCode:65,shift:true});
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
				expect(events[1]).toMatchPropertiesOf({type:'keydown',keyCode:49,shift:true});
			});
			
			it("should trigger correct keypress",function(){
				expect(events[2]).toMatchPropertiesOf({type:'keypress',charCode:33,shift:true});
			});
			
			it("should trigger correct keyup",function(){
				expect(events[3]).toMatchPropertiesOf({type:'keyup',keyCode:49,shift:true});
			});	
			
			it("should trigger shift keyup",function(){
				expect(events[4]).toMatchPropertiesOf({type:'keyup',keyCode:16});
			});	
		});
	});
	
	describe("when holding alt", function(){	
		describe("and typing a character", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('alt','a')});
			});
			
			it("should produce the correct input value", function(){	
				expect(input).toHaveValue('');           
			});
			
			it("should trigger the correct number of events",function(){
				expect(events.length).toEqual(4);
			});
			
			it("should trigger alt keydown",function(){
				expect(events[0]).toMatchPropertiesOf({type:'keydown',keyCode:18});
			});
			
			it("should trigger correct keydown",function(){
				expect(events[1]).toMatchPropertiesOf({type:'keydown',keyCode:65,alt:true});
			});
			
			it("should trigger correct keyup",function(){
				expect(events[2]).toMatchPropertiesOf({type:'keyup',keyCode:65,alt:true});
			});	
			
			it("should trigger alt keyup",function(){
				expect(events[3]).toMatchPropertiesOf({type:'keyup',keyCode:18});
			});
		});
	});
		
	describe("when holding ctrl", function(){	
		describe("and typing a character", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('ctrl','a')});
			});
			
			it("should produce the correct input value", function(){	
				expect(input).toHaveValue('');           
			});
			
			it("should trigger the correct number of events",function(){
				expect(events.length).toEqual(4);
			});
			
			it("should trigger ctrl keydown",function(){
				expect(events[0]).toMatchPropertiesOf({type:'keydown',keyCode:17});
			});
			
			it("should trigger correct keydown",function(){
				expect(events[1]).toMatchPropertiesOf({type:'keydown',keyCode:65,ctrl:true});
			});
			
			it("should trigger correct keyup",function(){
				expect(events[2]).toMatchPropertiesOf({type:'keyup',keyCode:65,ctrl:true});
			});	
			
			it("should trigger ctrl keyup",function(){
				expect(events[3]).toMatchPropertiesOf({type:'keyup',keyCode:17});
			});
		});		
	});
	
	describe("when holding meta", function(){	
		describe("and typing a character", function(){
			beforeEach(function(){
				input.mashKeys(function(keys){keys.hold('meta','a')});
			});
			
			it("should produce the correct input value", function(){	
				expect(input).toHaveValue('');           
			});
			
			it("should trigger the correct number of events",function(){
				expect(events.length).toEqual(4);
			});
			
			it("should trigger ctrl keydown",function(){
				expect(events[0]).toMatchPropertiesOf({type:'keydown',keyCode:91});
			});
			
			it("should trigger correct keydown",function(){
				expect(events[1]).toMatchPropertiesOf({type:'keydown',keyCode:65,meta:true});
			});
			
			it("should trigger correct keyup",function(){
				expect(events[2]).toMatchPropertiesOf({type:'keyup',keyCode:65,meta:true});
			});	
			
			it("should trigger ctrl keyup",function(){
				expect(events[3]).toMatchPropertiesOf({type:'keyup',keyCode:91});
			});
		});		
	});
});