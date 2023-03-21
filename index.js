
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://zygnciikdyabufikydye.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Z25jaWlrZHlhYnVmaWt5ZHllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNDEzMzIsImV4cCI6MTk5MzcxNzMzMn0.8SkCh6dCUtrC2KGOJxLRcgGsB8fODh1ZkbFYlvBhphA'
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<td>${book.title} - ${book.Author} - ${book.ISBN}</td>`;
}