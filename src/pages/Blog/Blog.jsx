
const Blog = () => {
    return (
        <div>
            <h1 className="gradient-text text-5xl font-bold mt-8">Blog Page</h1>
            <div className="collapse max-w-4xl mx-auto mt-12">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-sky-700 text-primary-content peer-checked:bg-sky-700 peer-checked:text-sky-700-content">
                    Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content bg-sky-700 text-primary-content peer-checked:bg-sky-500 peer-checked:text-sky-500-content">
                    <p className="pt-4">Ans: A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. Modern web browsers support a number of ways for websites to store data on the user's computer — with the user's permission — then retrieve it when necessary. This lets you persist data for long-term storage, save sites or documents for offline use, retain user-specific settings for your site, and more. This article explains the very basics of how these work.</p>
                </div>
            </div>
            <div className="collapse max-w-4xl mx-auto mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-green-700 text-primary-content peer-checked:bg-green-700 peer-checked:text-green-700-content">
                    Question: Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content bg-green-700 text-primary-content peer-checked:bg-green-500 peer-checked:text-green-500-content">
                    <p className="pt-4">Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div className="collapse max-w-4xl mx-auto mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-purple-700 text-primary-content peer-checked:bg-purple-700 peer-checked:text-purple-700-content">
                    Question: What is express js? What is Nest js?
                </div>
                <div className="collapse-content bg-purple-700 text-primary-content peer-checked:bg-purple-500 peer-checked:text-purple-500-content">
                    <p className="pt-4">Ans: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. NestJS is a progressive Node. js framework that helps build server-side applications. Nest extends Node. js frameworks like Express or Fastify adding modular organization and a wide range of other libraries to take care of repetitive tasks. It's open-source, uses TypeScript, and is a very versatile Node.</p>
                </div>
            </div>
            <div className="collapse max-w-4xl mx-auto mt-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-rose-700 text-primary-content peer-checked:bg-rose-700 peer-checked:text-rose-700-content">
                    Question: What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content bg-rose-700 text-primary-content peer-checked:bg-rose-500 peer-checked:text-rose-500-content">
                    <p className="pt-4">Ans: Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;