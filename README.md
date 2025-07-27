# Caffe Noire Ecommerce Website - Industry Project

Started On: 27/7/2025,
Timeline: 3 Weeks.
Tools used: 
- Front-End: React / Tailwind Css
- Backend: MongoDB

Why MongoDb? Not SQL
i want a faster imprementation instead of having to do up a relational database like mysql.

For the searchbar, why not condition rendering?
when i tried using condition rendering it feel rigid it doesn't allow transition, it remove completely and re-render again instantly.
so i need to hide it using over-hidden, 
{`absolute top-[104px] left-0 z-50 w-full bg-transparent transition-all duration-300 overflow-hidden ${isSearch ? 'max-h-40 py-6' : 'max-h-0 py-0'}`}>
It took me awhile looking at my notes from school how useState works.
so isSetSearch is a handle for us to change the state of isSearch, having it to be false at first.
when i click on search, isSetSearch(!isSearch) will run and change false to true.
and thus rending the max-h-40 and when u click search again , isSetSearch(!isSearch) runs again and change true to false causing it to max-h-0