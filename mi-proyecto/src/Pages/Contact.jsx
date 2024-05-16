function Contact(){
    return(
        <div class="max-w-md mx-auto">
  <h2 class="text-2xl font-bold mb-4">Contáctanos</h2>
  <form action="#" method="POST" class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
      <input type="text" id="name" name="name" class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
      <input type="email" id="email" name="email" class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
    </div>
    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700">Asunto</label>
      <input type="text" id="subject" name="subject" class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
      <textarea id="message" name="message" rows="4" class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
    </div>
    <div>
      <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Enviar Mensaje</button>
    </div>
  </form>
</div>

    )
}
export default Contact;