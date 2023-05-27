import { Accordion } from "flowbite-react"

export default function Filter() {
  return (
    <>
    <Accordion className="h-full w-full rounded-none">
      <Accordion.Panel id="filter" className="h-full w-full rounded-none">
        <Accordion.Title>
          Filter Category
        </Accordion.Title>
        <Accordion.Content>
          <input type="checkbox" name="category" value="category1" />
          <label htmlFor="category1">Category 1</label>
          <input type="checkbox" name="category" value="category2" />
          <label htmlFor="category2">Category 2</label>
          <input type="checkbox" name="category" value="category3" />
          <label htmlFor="category3">Category 3</label>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </>
  )
}