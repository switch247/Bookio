import axios from 'axios';
const apiKey = 'AIzaSyAVcZvjJxHE-2Xqe4MEeCGnusDng95_SDM';
export async function Fetch(link: string) {
    // const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${title}`;
    const baseUrl = `https://www.googleapis.com/books/v1/volumes/${link}&maxResults=40`;
    
    // https://www.googleapis.com/books/v1/volumes?q=isbn:<your_isbn_here>
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error: any) {
        console.log('Error searching books:', error);
        throw error;
    }
    // AIzaSyAVcZvjJxHE-2Xqe4MEeCGnusDng95_SDM
}
type MyType = {
    category?: string;
    title?: string;
    author?: string;
};

export async function searchBooks({ title, author, category }: MyType) {

    if (!title)
        title = ''
    else {
        title = title.replace(/ /g, "+");
    }
    if (!author)
        author = ''
    else {
        author = `inauthor:"${author}"`.replace(/ /g, "+");
    }
    if (!category)
        category = ''
    else {
        category = `subject:"${category}"`.replace(/ /g, "+");
    }
    //
    // intitle:
    // const params = `
    //     "${title}"
    //     "${author}"
    //     "${category}"
    // `;
    const params = `
  ${title !== "" ? `"${title}"` : ""}
  ${author !== "" ? `"${author}"` : ""}
  ${category !== "" ? `"${category}"` : ""}
`.trim().replace(/\n/g, " & ");
    // console.log(params)
    const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${params}&maxResults=40`;
    // "&startIndex=x"
    console.log(baseUrl)
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error: any) {
        console.log('Error searching books:', error);
        throw error;
    }
}