import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
const tools = [
  { name: 'ChatGPT', category: 'Writing Assistant', description: 'AI chatbot by OpenAI.', link: 'https://chat.openai.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'Midjourney', category: 'Image Generation', description: 'AI art from text.', link: 'https://midjourney.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Midjourney_Emblem.svg/512px-Midjourney_Emblem.svg.png' }
];

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Gnois</h1>
      <Input placeholder="Search AI tools..." className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <Card key={index}>
            <CardContent>
              <img src={tool.logo} alt={tool.name} className="w-12 h-12 mb-2" />
              <h2 className="text-xl font-semibold">{tool.name}</h2>
              <p className="text-sm text-gray-600">{tool.category}</p>
              <p>{tool.description}</p>
              <a href={tool.link} className="text-blue-600 underline mt-2 inline-block" target="_blank">Visit Site</a>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">Submit Your AI Tool</h3>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdlUESIVZR4UYl0Oijjf7Y6rqktRlawm6fdewMxo_c26Q3L5A/viewform?embedded=true" width="100%" height="600" frameBorder="0">Loading…</iframe>
      </div>
    </div>
  );
}
