import connectToDb from "@/utils/connectToDb"

export const GET = async (request) => {
    try {
        const query = request.nextUrl.searchParams.get('query')
        const db = await connectToDb()
        const stocks = db.collection('stocks')
        const stocksData = await stocks.find({name:{$regex: query}}).toArray()

        return new Response(JSON.stringify(stocksData), { status: 200 })


    } catch (error) {
        return new Response(error, { status:501})

    }

}
