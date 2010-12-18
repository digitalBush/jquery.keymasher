beforeEach(function(){
	this.addMatchers({
		toHaveValue:function(expected){			
			return (this.actual=this.actual.val())===expected;
		},
		toMatchPropertiesOf:function(expected){
			if($.type(expected)!=='object')
				return false;
			for(var prop in expected){
				if(this.actual[prop]!==expected[prop])
					return false;
			}
			return true;
		},
		toMatchPropertiesOfEachInSequence:function(expected){
			var m=this;
			if(this.actual.length!=expected.length){
				this.message = function() { 
				  return "Expected sequence of length "+expected.length+" to equal actual sequence of length "+this.actual.length; 
				}; 
				return false;
			}
			
			$.each(this.actual,function(index,item){
				m.spec.expect(item).toMatchPropertiesOf(expected[index]);
			});
			return true;
		}
	});
});
