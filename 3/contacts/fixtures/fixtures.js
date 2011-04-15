define(['jupiter/fixture/fixture','contacts/fixtures/contacts'], function(){
	$.jupiter_fixture('/services/categories','fixtures/categories.json');
	$.jupiter_fixture('/services/categories/create',function(s){
		return s.data;
	});
	$.jupiter_fixture('/services/locations','fixtures/locations.json');
	$.jupiter_fixture('/services/companies','fixtures/companies.json');
})
